"use strict";

const User = require("../models/userModel");

const passwordEncrypt = require("../helpers/paswordEncrypte");

module.exports = {

  login: async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
      const user = await User.findOne({ email });

      if (user && user.password == passwordEncrypt(password)) {
        req.session.email = user.email;
        req.session.password = user.password;

        if (req.body?.remindMe) {
          req.session.remindMe = req.body.remindMe;
          req.sessionOptions.maxAge = 1000 * 60 * 60 * 24 * 2; //2 days
        }
        res.status(200).send({
          error: false,
          message: "Login successfuly",
          user,
        });

      } else {
        res.errorStatusCode = 401;
        throw new Error("Login parameters are not true");
      }
    } else {
      res.errorStatusCode = 401;
      throw new Error("Email and password are required");
    }
  },

  logout: async (req, res) => {
    req.session = null;
    res.status(200).send({
      error: false,
      message: "Logout successfuly",
    });
  },
};
