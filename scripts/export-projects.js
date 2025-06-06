const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

const db = new sqlite3.Database('./data/portfolio.db');

const getProjects = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM project`, [], (err, rows) => {
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
  const projects = await getProjects();

  const tsContent = `import { Project } from "./projects.model";

export const projects: Project[] = ${JSON.stringify(projects, null, 2)};
`;

  const outputPath = path.join('src/app/data/portfolio/projects.ts');
  fs.writeFileSync(outputPath, tsContent, 'utf8');
  console.log(`✔ Successfully generated ${outputPath}`);
  db.close();
})();