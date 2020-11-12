const jwt = require("jsonwebtoken");
const User = require("../models/User");
const autVer = async (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, "secret item", async (err, decodedItem) => {
      if (err) {
        res.json({ err });
        res.redirect("/login");
        next();
      } else {
        let user = await User.findById(decodedItem.id);
        res.json(user);
      }
    });
  } else {
    redirect("/login");
  }
};

module.exports = autVer;
