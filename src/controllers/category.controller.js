const db = require("../../connectDb.js");

const getCategories = (req, res, next) => {
  const { q } = req.query || {};
  const sql = `
  select * from category
  WHERE cat_name_bn like ? or cat_name_en like ?
  `;
  const params = [`%${q}%`, `%${q}%`];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
};

module.exports = { getCategories };
