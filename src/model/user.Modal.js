const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    mobile: {
      type: String,
    },
    address: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  { timestamps: true }
);
const user = mongoose.model("Users", userSchema);

module.exports = user;
