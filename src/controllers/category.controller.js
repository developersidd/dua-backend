const db = require("../../connectDb.js");

const getCategories = (req, res, next) => {
  const { q = "" } = req.query || {};
  let sql = `
  select * from category`;
  const decodedQuery = decodeURI(q);
  const params = [];
  if (decodedQuery?.trim()?.length > 0) {
    sql += ` where (cat_name_bn like ? or cat_name_en like ?) `;
    params.push(`%${decodedQuery}%`, `%${decodedQuery}%`);
  }
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
