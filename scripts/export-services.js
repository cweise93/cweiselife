const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

const db = new sqlite3.Database('./data/portfolio.db');

// Remove null/undefined fields recursively
const cleanObject = obj =>
  Object.fromEntries(
    Object.entries(obj)
      .filter(([_, v]) => v !== null && v !== undefined)
  );

const getServices = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM service`, [], async (err, services) => {
      if (err) return reject(err);

      for (const service of services) {
        const list_items = await new Promise((res, rej) => {
          db.all(
            `SELECT item FROM service_list_item WHERE service_id = ?`,
            [service.id],
            (err, rows) => {
              if (err) rej(err);
              else res(rows.map(row => row.item));
            }
          );
        });

        // Convert category fields to object
        service.category = {
          label: service.category_label,
          selected: !!service.category_selected
        };

        // Assign list_items
        service.list_items = list_items;

        // Clean up flat fields
        delete service.category_label;
        delete service.category_selected;

        // Sanitize nulls
        Object.assign(service, cleanObject(service));
      }

      resolve(services);
    });
  });
};

(async () => {
  const services = await getServices();

  const tsContent = `import { Service } from './services.model';

export const services: Service[] = ${JSON.stringify(services, null, 2)};
`;

  const outputPath = path.join('src/app/data/portfolio/services.ts');
  fs.writeFileSync(outputPath, tsContent, 'utf8');
  console.log(`✔ Successfully generated ${outputPath}`);
  db.close();
})();