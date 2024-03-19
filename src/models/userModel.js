"use strict";

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: { 
      type: String, 
      trim: true, 
      unique: true, 
      require: true 
    },
    password: { 
      type: String, 
      trim: true,  
      require: true 
    },
    firstName: String,
    lastName: String,
  },
  { collection: "user", timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
