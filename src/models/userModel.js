"use strict";

const mongoose = require("mongoose");
const passwordEncrypt = require("../helpers/paswordEncrypte")

const validateEmail = function(email) {
  const regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regx.test(email)
};

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      unique: true,
      require: true,
      validate: [validateEmail, 'Please enter a valid email address'],
    },
    password: {
      type: String,
      trim: true,
      require: true,
      set: (password)=>{passwordEncrypt(password)}
    },
    firstName: String,
    lastName: String,
  },
  { collection: "user", timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
