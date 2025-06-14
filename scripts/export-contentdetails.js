const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

const db = new sqlite3.Database('./data/portfolio.db');

const getContentDetails = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM contentDetails`, [], (err, rows) => {
      if (err) return reject(err);
      const cleaned = rows.map(row => {
        // Remove buttonLink if null or empty string
        if (!row.buttonLink) {
          delete row.buttonLink;
        }

        return row;
      });
      resolve(rows);
    });
  });
};

(async () => {
  const contentDetails = await getContentDetails();

  const tsContent = `import { ContentDetails } from "./content.model";

export const contentDetails: ContentDetails[] = ${JSON.stringify(contentDetails, null, 2)};
`;

  const outputPath = path.join('src/app/data/portfolio/content.ts');
  fs.writeFileSync(outputPath, tsContent, 'utf8');
  console.log(`✔ Successfully generated ${outputPath}`);
  db.close();
})();