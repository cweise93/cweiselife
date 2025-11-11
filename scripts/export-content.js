const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

const db = new sqlite3.Database('./data/portfolio.db');

const getContentWithListItems = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM content`, [], (err, contentRows) => {
      if (err) return reject(err);

      db.all(`SELECT * FROM content_list_item`, [], (err, listRows) => {
        if (err) return reject(err);

        db.all(`SELECT * FROM resume_details`, [], (err, resumeRows) => {
          if (err) return reject(err);

          const groupedItems = listRows.reduce((acc, row) => {
            if (!acc[row.content_id]) acc[row.content_id] = [];
            acc[row.content_id].push(row.item);
            return acc;
          }, {});

          const resumeMap = resumeRows.reduce((acc, row) => {
            try {
              acc[row.content_id] = JSON.parse(row.details);
            } catch (error) {
              acc[row.content_id] = null;
            }
            return acc;
          }, {});

          const result = contentRows.map(row => {
            const cleanedRow = {};
            Object.entries(row).forEach(([key, value]) => {
              if (value !== null && value !== '') {
                cleanedRow[key] = value;
              }
            });

            cleanedRow.list_items = groupedItems[row.id] || [];
            if (resumeMap[row.id]) {
              cleanedRow.resumeDetails = resumeMap[row.id];
            }
            return cleanedRow;
          });

          resolve(result);
        });
      });
    });
  });
};

(async () => {
  const content = await getContentWithListItems();

  const tsContent = `import { Content } from "./content.model";

export const content: Content[] = ${JSON.stringify(content, null, 2)};
`;

  const outputPath = path.join('src/app/data/portfolio/content.ts');
  fs.writeFileSync(outputPath, tsContent, 'utf8');
  console.log(`✔ Successfully generated ${outputPath}`);
  db.close();
})();
