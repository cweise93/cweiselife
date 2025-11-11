const { Router } = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const router = Router();
const dbPath = path.join(__dirname, '../../data/portfolio.db');

function runQuery(sql, params = []) {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READONLY, err => {
      if (err) return reject(err);
    });
    db.all(sql, params, (err, rows) => {
      db.close();
      if (err) return reject(err);
      resolve(rows);
    });
  });
}

async function attachListItems(contentRows) {
  if (!contentRows.length) return contentRows;
  const ids = contentRows.map(row => row.id);
  const placeholders = ids.map(() => '?').join(', ');
  const listRows = await runQuery(
    `SELECT content_id, item FROM content_list_item WHERE content_id IN (${placeholders})`,
    ids
  );

  const grouped = listRows.reduce((acc, row) => {
    if (!acc[row.content_id]) acc[row.content_id] = [];
    acc[row.content_id].push(row.item);
    return acc;
  }, {});

  return contentRows.map(row => ({
    ...row,
    list_items: grouped[row.id] || []
  }));
}

function matchesDate(row, year, month, day) {
  if (!row?.date || (!year && !month && !day)) return true;
  const date = new Date(row.date);
  if (Number.isNaN(date.getTime())) return true;
  const yearMatches = !year || date.getFullYear().toString() === year;
  const monthMatches =
    !month || (date.getMonth() + 1).toString().padStart(2, '0') === month;
  const dayMatches =
    !day || date.getDate().toString().padStart(2, '0') === day;
  return yearMatches && monthMatches && dayMatches;
}

router.get('/', async (req, res, next) => {
  try {
    const { type } = req.query;
    const params = [];
    let sql = 'SELECT * FROM content';
    if (type) {
      sql += ' WHERE contentType = ?';
      params.push(type);
    }
    sql += ' ORDER BY date DESC';
    const rows = await runQuery(sql, params);
    const withItems = await attachListItems(rows);
    res.json(withItems);
  } catch (error) {
    next(error);
  }
});

router.get('/:type/:slug', async (req, res, next) => {
  try {
    const { type, slug } = req.params;
    const { year, month, day } = req.query;
    const rows = await runQuery(
      'SELECT * FROM content WHERE contentType = ? AND slug = ?',
      [type, slug]
    );
    const filtered = rows.find(row => matchesDate(row, year, month, day));
    if (!filtered) {
      return res.status(404).json({ status: 'not_found', message: 'Content not found' });
    }

    const [withItems] = await attachListItems([filtered]);
    res.json(withItems);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
