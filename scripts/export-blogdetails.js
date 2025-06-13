const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

const db = new sqlite3.Database('./data/portfolio.db');

const getBlogDetails = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM blogDetails`, [], (err, rows) => {
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
  const blogDetails = await getBlogDetails();

  const tsContent = `import { BlogDetails } from "./blog.model";

export const blogDetails: BlogDetails[] = ${JSON.stringify(blogDetails, null, 2)};
`;

  const outputPath = path.join('src/app/data/portfolio/blog.ts');
  fs.writeFileSync(outputPath, tsContent, 'utf8');
  console.log(`✔ Successfully generated ${outputPath}`);
  db.close();
})();