const fs = require('fs');
const path = require('path');
const express = require('express');
const cors = require('cors');
const appInsights = require('applicationinsights');

const config = require('./config');
const apiRoutes = require('./routes');

if (process.env.APPINSIGHTS_CONNECTION_STRING) {
  appInsights
    .setup(process.env.APPINSIGHTS_CONNECTION_STRING)
    .setAutoCollectRequests(true)
    .setAutoCollectPerformance(true)
    .setAutoCollectExceptions(true)
    .setSendLiveMetrics(false)
    .setUseDiskRetryCaching(true)
    .start();
}

const app = express();

app.disable('x-powered-by');
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

if (config.corsOrigins.length) {
  app.use(cors({ origin: config.corsOrigins, credentials: true }));
} else {
  app.use(cors());
}

app.use('/api', apiRoutes);

const distPath = config.clientDistPath;
if (distPath && fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
} else {
  console.warn(
    `Angular build output not found at ${distPath}. Run \`npm run build\` before starting the server in production.`
  );
}

// Error handler – keeps responses consistent
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Unexpected server error';

  if (status >= 500) {
    console.error(err);
  }

  res.status(status).json({ status: 'error', message });
});

module.exports = app;
