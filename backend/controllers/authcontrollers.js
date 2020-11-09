const { loginSchima, singUpSchima } = require("../joi-validation/joi");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const jswtoken = (id) => {
  const maxAge = 3 * 24 * 60 * 60;
  return jswtoken.sign({ id }, "secret", { expiresIn: maxAge });
};

module.exports.userSignUp = async (req, res) => {
  const { error } = singUpSchima.validate(req.body);
  if (error) return res.status(400).send(error);
  try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    const jwt_tokken = jswtoken(user._id);
    res.cookie("jwt", jwt_tokken, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ user: user._id });
  } catch (err) {
    res.status(400).json(err);
  }
};
