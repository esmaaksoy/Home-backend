"use strict";

const User = require("../models/userModel");

module.exports = {
  isAdmin: async (req, res, next) => {
    if (req?.session.email) {
      const { email } = req.session;
      const user = await User.findOne({ email });
      if (email == "admin@admin.com") {
        next();
      } else {
        res.errorStatusCode = 403;
        throw new Error("You must be Admin.");
      }
    }
  },
};
