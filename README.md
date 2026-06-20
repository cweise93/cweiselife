# cweise.com Authority Hub

Clean-room Angular Material implementation of the repositioned cweise.com homepage.

## Stack

- Angular 22 standalone application
- Angular Material 22
- SCSS with Material theming priority
- Route-based pages with separate HTML/SCSS/TS files
- Included SVG assets generated for this project

## Prerequisites

- Node.js `22.22.3` or newer
- npm `11` or newer
- If you use `nvm`, run `nvm use` to pick up the version from `.nvmrc`.

## Run

```bash
npm install
npm start
```

## Build

```bash
npm run build
```

Production output is generated under `dist/`.

## SEO Artifacts

Machine-readable discovery files are generated from the source content model:

- `public/llms.txt`
- `public/llms-full.txt`
- `public/robots.txt`
- `public/sitemap.xml`

Regenerate them at any time with:

```bash
npm run seo:generate
```

`npm run build` runs that generator automatically before the Angular build.

## C2PA Verification

Tracked media assets in supported formats are expected to carry a valid embedded C2PA manifest.

Verify the repo state with:

```bash
npm run c2pa:verify
```

This requires `c2patool` to be available on your `PATH`. The deploy workflow installs a pinned version before build and will fail if any tracked asset is missing a valid manifest.

## Content Architecture

All authored site content now lives under `src/assets/content/`.

Files:

- `site.json`
- `writing.json`
- `frameworks.json`
- `guides.json`
- `about.json`

The Angular UI does not import JSON directly in page components. Page and layout components call the typed content service in `src/app/core/content/content.service.ts`, which keeps the current local-JSON setup simple while preserving a future API migration path.

### Add a new item

1. Open the matching content file in `src/assets/content/`.
2. Append a new object to `items[]`.
3. Required fields for collection items:
   - `id`
   - `slug`
   - `title`
   - `summary`
   - `status`
4. Use `status: "published"` for public visibility.
5. Use `status: "draft"` to keep the item out of public listing and detail routes.
6. Add the item slug to the relevant `featured*Slugs` list in `site.json` if it should appear on the homepage.

### Schema notes

- All collection items use explicit `id`, `slug`, and `status` fields.
- Writing and framework items should include `publishedOn`.
- Body content is structured for future persistence and API replacement.
- If a JSON file is malformed or missing, the content service falls back safely instead of hard-crashing the app.
