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

        // Group list items by content_id
        const groupedItems = listRows.reduce((acc, row) => {
          if (!acc[row.content_id]) acc[row.content_id] = [];
          acc[row.content_id].push(row.item);
          return acc;
        }, {});

        // Clean and attach list_items to each content object
        const result = contentRows.map(row => {
          const cleanedRow = {};
          Object.entries(row).forEach(([key, value]) => {
            if (value !== null && value !== '') {
              cleanedRow[key] = value;
            }
          });

          cleanedRow.list_items = groupedItems[row.id] || [];
          return cleanedRow;
        });

        resolve(result);
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
