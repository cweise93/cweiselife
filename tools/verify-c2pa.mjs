#!/usr/bin/env node

import { execFileSync, spawnSync } from "node:child_process";
import { readdirSync, statSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const expectedIssuer = "cweise.com";
const expectedCommonName = "Charles Weise";
const expectedWhereFrom = "https://cweise.com/";
const residualNeedles = [
  "chatgpt",
  "openai",
  "gpt-image",
  "openai media service api",
  "gpt-4o",
  "/mnt/data/",
  "ghostwriter_images",
];
const supportedExtensions = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".tif",
  ".tiff",
  ".svg",
]);
const gitPatterns = ["*.png", "*.jpg", "*.jpeg", "*.webp", "*.tif", "*.tiff", "*.svg"];
const defaultGeneratedDirectories = [
  path.join(repoRoot, "dist", "browser", "assets", "images"),
  path.join(repoRoot, "docs", "browser", "assets", "images"),
];

const hasC2paTool = commandExists("c2patool");
const hasExiftool = commandExists("exiftool");
const canVerifyWhereFrom = os.platform() === "darwin" && commandExists("xattr") && commandExists("python3");

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

function commandExists(command) {
  const result = spawnSync(command, ["--version"], {
    encoding: "utf8",
    stdio: "ignore",
  });

  return !result.error;
}

function gitLsFiles(extraArgs = []) {
  const output = execFileSync(
    "git",
    ["ls-files", "-z", ...extraArgs, "--", ...gitPatterns],
    { cwd: repoRoot, encoding: "utf8" },
  );

  return output
    .split("\0")
    .filter(Boolean)
    .map((filePath) => path.join(repoRoot, filePath));
}

function resolveTargets(args) {
  if (!args.length) {
    const files = new Set([
      ...gitLsFiles(),
      ...gitLsFiles(["-o", "--exclude-standard"]),
    ]);

    for (const directory of defaultGeneratedDirectories) {
      if (statSync(directory, { throwIfNoEntry: false })?.isDirectory()) {
        for (const filePath of walkDirectory(directory)) {
          files.add(filePath);
        }
      }
    }

    return [...files];
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

    if (stats.isFile() && isSupported(resolved)) {
      files.add(resolved);
    }
  }

  return [...files];
}

function verifyWithC2paTool(filePath) {
  if (!hasC2paTool) {
    throw new Error("`c2patool` is not installed or not on PATH.");
  }

  const result = spawnSync("c2patool", [filePath], {
    cwd: repoRoot,
    encoding: "utf8",
  });

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    const detail = (result.stderr || result.stdout || "").trim();
    return {
      ok: false,
      reason: detail || `c2patool exited with status ${result.status}`,
      detailedOutput: "",
    };
  }

  let parsed;
  try {
    parsed = JSON.parse(result.stdout);
  } catch (error) {
    return {
      ok: false,
      reason: `Unable to parse c2patool output: ${error.message}`,
      detailedOutput: "",
    };
  }

  if (!parsed.active_manifest) {
    return {
      ok: false,
      reason: "No active C2PA manifest found.",
      detailedOutput: "",
    };
  }

  const activeManifest = parsed.manifests?.[parsed.active_manifest];
  const signatureInfo = activeManifest?.signature_info ?? {};

  if (signatureInfo.issuer !== expectedIssuer || signatureInfo.common_name !== expectedCommonName) {
    return {
      ok: false,
      reason: `Unexpected signer ${signatureInfo.issuer ?? "<missing issuer>"} | ${signatureInfo.common_name ?? "<missing common name>"}.`,
      detailedOutput: "",
    };
  }

  if (parsed.validation_state !== "Valid") {
    return {
      ok: false,
      reason: `Manifest validation state was ${parsed.validation_state ?? "unknown"}.`,
      detailedOutput: "",
    };
  }

  const detailedResult = spawnSync("c2patool", [filePath, "--detailed"], {
    cwd: repoRoot,
    encoding: "utf8",
  });

  return {
    ok: true,
    reason: "",
    detailedOutput: (detailedResult.stdout || "").toLowerCase(),
  };
}

function verifyWhereFrom(filePath) {
  if (!canVerifyWhereFrom) {
    return { ok: true, reason: "" };
  }

  const script = [
    "import plistlib, subprocess, sys",
    "hex_payload = subprocess.check_output(['xattr', '-px', 'com.apple.metadata:kMDItemWhereFroms', sys.argv[1]], text=True).strip()",
    "items = plistlib.loads(bytes.fromhex(hex_payload)) if hex_payload else []",
    "print(items[0] if items else '')",
  ].join(";");
  const result = spawnSync("python3", ["-c", script, filePath], {
    cwd: repoRoot,
    encoding: "utf8",
  });

  if (result.status !== 0) {
    const detail = (result.stderr || result.stdout || "").trim();
    return {
      ok: false,
      reason: detail || "Unable to inspect macOS Where from metadata.",
    };
  }

  const whereFrom = (result.stdout || "").trim();
  if (whereFrom !== expectedWhereFrom) {
    return {
      ok: false,
      reason: `Unexpected Where from value ${whereFrom || "<missing>"}.`,
    };
  }

  return { ok: true, reason: "" };
}

function verifyResidualMarkers(filePath, detailedOutput) {
  const outputs = [detailedOutput];

  if (hasExiftool) {
    const result = spawnSync("exiftool", [filePath], {
      cwd: repoRoot,
      encoding: "utf8",
    });

    if (result.status !== 0) {
      const detail = (result.stderr || result.stdout || "").trim();
      return {
        ok: false,
        reason: detail || "Unable to inspect embedded metadata with exiftool.",
      };
    }

    outputs.push((result.stdout || "").toLowerCase());
  }

  const combined = outputs.join("\n");
  const matches = residualNeedles.filter((needle) => combined.includes(needle));
  if (matches.length) {
    return {
      ok: false,
      reason: `Residual source markers found: ${matches.join(", ")}.`,
    };
  }

  return { ok: true, reason: "" };
}

function verifyFile(filePath) {
  const c2pa = verifyWithC2paTool(filePath);
  if (!c2pa.ok) {
    return { ok: false, filePath, reason: c2pa.reason };
  }

  const whereFrom = verifyWhereFrom(filePath);
  if (!whereFrom.ok) {
    return { ok: false, filePath, reason: whereFrom.reason };
  }

  const residual = verifyResidualMarkers(filePath, c2pa.detailedOutput);
  if (!residual.ok) {
    return { ok: false, filePath, reason: residual.reason };
  }

  return { ok: true, filePath };
}

function main() {
  const files = resolveTargets(process.argv.slice(2)).sort((left, right) =>
    normalizeToRepo(left).localeCompare(normalizeToRepo(right)),
  );

  if (!files.length) {
    console.log("No supported files found to verify.");
    return;
  }

  const failures = files.map(verifyFile).filter((result) => !result.ok);

  if (failures.length) {
    console.error(`C2PA verification failed for ${failures.length} of ${files.length} files.`);
    for (const failure of failures) {
      console.error(`- ${normalizeToRepo(failure.filePath)}: ${failure.reason}`);
    }
    process.exitCode = 1;
    return;
  }

  const notes = [];
  if (!canVerifyWhereFrom) {
    notes.push("Where from check skipped on this platform");
  }
  if (!hasExiftool) {
    notes.push("exiftool scan skipped");
  }

  const suffix = notes.length ? ` (${notes.join("; ")})` : "";
  console.log(`C2PA verification passed for ${files.length} files.${suffix}`);
}

main();
