const db = require("../../connectDb");

const getDuas = (req, res, next) => {
  const { q } = req.query || {};
  const cat_id = req.params.id;
  let sql = `
  select * from dua where cat_id = ?`;
  const params = [cat_id];
  if (q?.trim()?.length > 0) {
    sql += ` and (dua_name_bn like ? or dua_name_en like ?) `;
    params.push(`%${q}%`, `%${q}%`);
  }
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(500).json({ error: "Error retrieving duas." });
      return;
    }
    res.status(200).json({
      success: true,
      message: "Duas retrieved successfully.",
      data: rows,
    });
  });
};

module.exports = { getDuas };
