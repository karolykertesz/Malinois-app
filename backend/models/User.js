const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: [6, "min 6 characters required"],
  },
  email: {
    type: String,
    required: true,
    unique: [true, "valid email is required"],
    minlength: 8,
    maxlength: 50,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "password needs to be longer than 6"],
    maxlength: 500,
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
    throw Error("Password id not valid!");
  }
  throw Error("Need a valid Email!");
};

mongoose.model("User", UserSchema);
