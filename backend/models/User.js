const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Your password required"],
    minlength: [6, "password needs to be longer than 6 char"],
  },
});

UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("Password  not valid!");
  }
  throw Error("Need a valid Email!");
};

const User = mongoose.model("User", UserSchema);
module.exports = User;
