const db = require("../../connectDb.js");

const getCategories = (req, res, next) => {
  const sql = "select * from category";
  const params = [];
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
