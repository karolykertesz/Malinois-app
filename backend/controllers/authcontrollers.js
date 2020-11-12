const User = require("../models/User");
const jwt = require("jsonwebtoken");
const handleErrors = require("../errors/error");
const { singUpSchima, loginSchima } = require("../joi-validation/joi");

let maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "secret item", { expiresIn: maxAge });
};
module.exports.sign_up_get = (req, res) => {
  res.render("signup");
};

module.exports.sign_up_post = async (req, res) => {
  const { error } = singUpSchima.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const { name, email, password } = req.body;
    const user = await User.create({
      name,
      email,
      password,
    });
    const tokken = createToken(user._id);
    res.cookie("jwt", tokken, {
      maxAge: maxAge * 1000,
      httpOnly: true,
    });
    res.status(201).json({
      user: user._id,
    });
  } catch (err) {
    const errors = handleErrors(err);

    res.status(400).json({
      errors,
    });
  }
};
module.exports.home = async (req, res) => {
  const user = await User.find
};

module.exports.login_post = async (req, res) => {
  const { error } = loginSchima.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ user: user._id, user: user.name });
  } catch (err) {
    const error = handleErrors(err);
    res.status(400).json({ error });
  }
};
