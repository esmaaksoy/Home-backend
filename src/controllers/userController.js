"use strict";

const User = require("../models/userModel");

const passwordEncrypt = require("../helpers/paswordEncrypte");

module.exports = {
  create: async (req, res) => {
    const data = await User.create(req.body);
    res.status(201).send({
      error: false,
      body: req.body,
      data: data,
      
    });
  },

  login: async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
      const user = await User.findOne({ email });

      if (user && user.password == passwordEncrypt(password)) {
        res.status(200).send({
          error: false,
          message: "Login is successfuly",
          user
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

  logout: async (req, res) => {},
};
