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
- **Hosting:** Azure Static Web Apps (Standard)
- **CI/CD:** Azure DevOps Pipelines → Azure Static Web Apps

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

## 🚀 Deployment via Azure DevOps → Azure Static Web Apps

The pipeline defined in `azure-pipelines.yml` is now the single source of truth. It:

1. Runs on Microsoft-hosted Ubuntu agents (main + staging branches).
2. Installs Node 20, performs `npm ci`, and builds Angular with the correct configuration (production for `main`, staging profile otherwise).
3. Uses the `AzureStaticWebApp@0` task to push `dist/cweiselife/browser` to your Static Web App.

### One-time setup

1. **Install the Azure Static Web Apps extension** in your Azure DevOps organization (Marketplace → “Azure Static Web Apps”).
2. **Grab the deployment token** from the Static Web App resource (Azure Portal → Static Web App → Deployment token).
3. **Create a secret pipeline variable** named `AZURE_STATIC_WEB_APPS_API_TOKEN` and paste the token value.
4. (Optional) Use variable groups for other shared settings, but the pipeline currently doesn’t require additional secrets.

### How environments map

- `main` → Angular `production` build → Static Web Apps **production** environment.
- `staging` → Angular `staging` build → Static Web Apps environment labeled “staging” (preview slot).

Any other branch can be queued manually and will deploy as a preview environment under the branch name; point custom domains (e.g., `cweise.com`) at the production environment via the Static Web App’s **Custom domains** blade.

> ℹ️ Azure Static Web Apps hosts static assets only. The Express server under `server/` stays available for local development, but production APIs must be implemented as Azure Functions or another backend service.

---

## 🗺️ Roadmap

- Wire Express API into Azure SQL (data model TBD)
- Add Azure OpenAI prompt pipelines for designated forms
- Promote Socket.IO channels for near real-time UI updates
- Harden security with Azure Key Vault + Managed Identity
