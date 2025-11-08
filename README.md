# Professional Portfolio — Charles Weise

Welcome to my portfolio site, rebuilt around an Angular + Express stack and deployed to Azure App Service. The site showcases my professional services, experience, and technical case studies.

🌐 **Live Site:** [https://cweise.com](https://cweise.com)

---

## 🧰 Tech Stack

- **Frontend:** Angular 17+
- **Styling:** SCSS, Angular Material
- **Backend:** Node.js (Express + Socket.IO)
- **Data:** Azure SQL Database (serverless)
- **AI:** Azure OpenAI (planned)
- **Hosting:** Azure App Service (Linux)
- **CI/CD:** GitHub Actions → Azure Web Apps Deploy

---

## 🚀 Features

- Modular, responsive design
- Toggleable service categories with case study highlights
- Thematic styling (light/dark mode)
- Contact section with Material Icons
- Dynamically loaded sections via Angular routing
- Realtime channel scaffolding with Socket.IO (future data sync)

---

## 📦 Installation & Development

```bash
# Clone the repository
git clone https://github.com/cweise93/portfolio.git
cd portfolio

# Install dependencies
npm install

# Copy environment template and adjust values
cp .env.example .env.local

# Start Angular dev server, Express API, and content watcher
npm run start:dev

# API only (useful when Angular has already been built)
npm run start:server
```

The development server assumes the Express API is available at `http://localhost:4000/api`. Update `.env.local` if you want to change the port, allowed CORS origins, or other backend settings.

---

## 🚀 Deployment via GitHub Actions

The workflow at `.github/workflows/azure-static-web-apps.yml` builds the Angular application, packages the Node/Express backend, and deploys the bundle to Azure App Service. Commits to `main` deploy to production; commits to `staging` deploy to the staging slot. You can also trigger manual runs with the **Run workflow** button.

### Required GitHub secrets

- `AZURE_CREDENTIALS` – Service principal JSON for `azure/login` (use `az ad sp create-for-rbac ...`).
- `AZURE_WEBAPP_NAME_PROD` – App Service name for production deployments.
- `AZURE_WEBAPP_NAME_STAGING` – App Service name or slot for staging deployments.
- `AZURE_APP_SETTINGS_PROD` *(optional)* – JSON array of App Settings for production.
- `AZURE_APP_SETTINGS_STAGING` *(optional)* – JSON array of App Settings for staging.

Example value for the app settings secrets:

```json
[
  { "name": "NODE_ENV", "value": "production", "slotSetting": false },
  { "name": "CLIENT_DIST_PATH", "value": "dist/cweiselife/browser", "slotSetting": false },
  { "name": "AZURE_SQL_CONNECTION_STRING", "value": "<connection-string>", "slotSetting": true },
  { "name": "AZURE_OPENAI_ENDPOINT", "value": "https://<resource>.openai.azure.com", "slotSetting": false },
  { "name": "AZURE_OPENAI_KEY", "value": "<api-key>", "slotSetting": true }
]
```

The deployment step zips the repository (excluding `node_modules` and Git metadata). Azure’s build service (Oryx) restores dependencies and executes `npm run build`, so keep the build script aligned with the desired Angular configuration.

---

## 🗺️ Roadmap

- Wire Express API into Azure SQL (data model TBD)
- Add Azure OpenAI prompt pipelines for designated forms
- Promote Socket.IO channels for near real-time UI updates
- Harden security with Azure Key Vault + Managed Identity
