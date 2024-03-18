"use strict";

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, trim: true, unique: true },
    password: {},
  },
  { collection: "user", timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
