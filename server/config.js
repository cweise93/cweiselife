const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

const env = process.env.NODE_ENV || 'development';
const dotenvCandidates = [
  `.env.${env}.local`,
  `.env.${env}`,
  '.env.local',
  '.env'
];

dotenvCandidates.forEach((filename) => {
  const filePath = path.resolve(process.cwd(), filename);
  if (fs.existsSync(filePath)) {
    dotenv.config({ path: filePath, override: false });
  }
});

dotenv.config({ override: false });

const normalizeOrigins = (value) => {
  if (!value) return [];
  return value
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);
};

const config = {
  env,
  host: process.env.HOST || '0.0.0.0',
  port: Number(process.env.PORT) || 4000,
  corsOrigins: normalizeOrigins(process.env.CORS_ORIGINS),
  clientDistPath:
    process.env.CLIENT_DIST_PATH || path.resolve(process.cwd(), 'dist/cweiselife/browser'),
  azure: {
    sqlConnectionString: process.env.AZURE_SQL_CONNECTION_STRING || '',
    openAiEndpoint: process.env.AZURE_OPENAI_ENDPOINT || '',
    openAiKey: process.env.AZURE_OPENAI_KEY || ''
  }
};

module.exports = config;
