# cweise.com Authority Hub

Clean-room Angular Material implementation of the repositioned cweise.com homepage.

## Stack

- Angular 21 standalone application
- Angular Material 21
- SCSS with Material theming priority
- Route-based pages with separate HTML/SCSS/TS files
- Included SVG assets generated for this project

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
