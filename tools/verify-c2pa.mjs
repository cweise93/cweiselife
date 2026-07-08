#!/usr/bin/env node

import { execFileSync, spawnSync } from "node:child_process";
import { readdirSync, statSync } from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

const supportedExtensions = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".tif",
  ".tiff",
  ".svg",
]);

const gitPatterns = [
  "*.png",
  "*.jpg",
  "*.jpeg",
  "*.webp",
  "*.tif",
  "*.tiff",
  "*.svg",
];

const expectedIssuer = "cweise.com";
const expectedCommonName = "Charles Weise";
const expectedWhereFrom = "https://cweise.com/";
const residualNeedles = [
  "chatgpt",
  "openai",
  "gpt-image",
  "openai media service api",
  "gpt-4o",
];
const enforceWhereFrom =
  process.platform === "darwin" && process.env.C2PA_VERIFY_WHERE_FROM === "1";

function commandExists(command) {
  const result = spawnSync("sh", ["-lc", `command -v ${command}`], {
    cwd: repoRoot,
    encoding: "utf8",
  });

  return result.status === 0;
}

function normalizeToRepo(filePath) {
  return path.relative(repoRoot, filePath).split(path.sep).join("/");
}

function isSupported(filePath) {
  return supportedExtensions.has(path.extname(filePath).toLowerCase());
}

function walkDirectory(root) {
  const discovered = [];

  for (const entry of readdirSync(root, { withFileTypes: true })) {
    const resolved = path.join(root, entry.name);

    if (entry.isDirectory()) {
      discovered.push(...walkDirectory(resolved));
      continue;
    }

    if (entry.isFile() && isSupported(resolved)) {
      discovered.push(resolved);
    }
  }

  return discovered;
}

function resolveTargets(args) {
  if (!args.length) {
    const output = execFileSync("git", ["ls-files", "-z", "--", ...gitPatterns], {
      cwd: repoRoot,
      encoding: "utf8",
    });

    return output
      .split("\0")
      .filter(Boolean)
      .map((filePath) => path.join(repoRoot, filePath));
  }

  const files = new Set();

  for (const rawTarget of args) {
    const resolved = path.resolve(process.cwd(), rawTarget);
    const stats = statSync(resolved, { throwIfNoEntry: false });

    if (!stats) {
      throw new Error(`Path does not exist: ${rawTarget}`);
    }

    if (stats.isDirectory()) {
      for (const filePath of walkDirectory(resolved)) {
        files.add(filePath);
      }
      continue;
    }

    if (!stats.isFile()) {
      continue;
    }

    if (isSupported(resolved)) {
      files.add(resolved);
    }
  }

  return [...files];
}

function verifyFile(filePath) {
  const result = spawnSync("c2patool", [filePath], {
    cwd: repoRoot,
    encoding: "utf8",
  });

  if (result.error) {
    if (result.error.code === "ENOENT") {
      throw new Error("`c2patool` is not installed or not on PATH.");
    }

    throw result.error;
  }

  if (result.status !== 0) {
    const detail = (result.stderr || result.stdout || "").trim();
    return {
      ok: false,
      filePath,
      reason: detail || `c2patool exited with status ${result.status}`,
    };
  }

  let parsed;

  try {
    parsed = JSON.parse(result.stdout);
  } catch (error) {
    return {
      ok: false,
      filePath,
      reason: `Unable to parse c2patool output: ${error.message}`,
    };
  }

  if (!parsed.active_manifest) {
    return {
      ok: false,
      filePath,
      reason: "No active C2PA manifest found.",
    };
  }

  const activeManifest = parsed.manifests?.[parsed.active_manifest];
  const signatureInfo = activeManifest?.signature_info ?? {};

  if (signatureInfo.issuer !== expectedIssuer || signatureInfo.common_name !== expectedCommonName) {
    return {
      ok: false,
      filePath,
      reason: `Unexpected signer ${signatureInfo.issuer ?? "<missing issuer>"} | ${signatureInfo.common_name ?? "<missing common name>"}.`,
    };
  }

  if (parsed.validation_state !== "Valid") {
    return {
      ok: false,
      filePath,
      reason: `Manifest validation state was ${parsed.validation_state ?? "unknown"}.`,
    };
  }

  if (enforceWhereFrom) {
    try {
      const whereFrom = execFileSync("mdls", ["-raw", "-name", "kMDItemWhereFroms", filePath], {
        cwd: repoRoot,
        encoding: "utf8",
      }).trim();

      if (!whereFrom.includes(expectedWhereFrom)) {
        return {
          ok: false,
          filePath,
          reason: `Where from did not include ${expectedWhereFrom}.`,
        };
      }
    } catch (error) {
      return {
        ok: false,
        filePath,
        reason: `Unable to inspect macOS where-from metadata: ${error.message}`,
      };
    }
  }

  if (commandExists("exiftool")) {
    try {
      const exifOutput = execFileSync("exiftool", [filePath], {
        cwd: repoRoot,
        encoding: "utf8",
      }).toLowerCase();
      const residualMatches = residualNeedles.filter((needle) => exifOutput.includes(needle));

      if (residualMatches.length) {
        return {
          ok: false,
          filePath,
          reason: `Residual source markers found: ${residualMatches.join(", ")}.`,
        };
      }
    } catch (error) {
      return {
        ok: false,
        filePath,
        reason: `Unable to inspect embedded metadata with exiftool: ${error.message}`,
      };
    }
  }

  return { ok: true, filePath };
}

function main() {
  const files = resolveTargets(process.argv.slice(2)).sort((a, b) =>
    normalizeToRepo(a).localeCompare(normalizeToRepo(b)),
  );

  if (!files.length) {
    console.log("No supported files found to verify.");
    return;
  }

  const failures = files
    .map(verifyFile)
    .filter((result) => !result.ok);

  if (failures.length) {
    console.error(`C2PA verification failed for ${failures.length} of ${files.length} files.`);

    for (const failure of failures) {
      console.error(`- ${normalizeToRepo(failure.filePath)}: ${failure.reason}`);
    }

    process.exitCode = 1;
    return;
  }

  console.log(`C2PA verification passed for ${files.length} files.`);
}

main();
