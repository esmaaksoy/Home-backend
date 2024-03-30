"use strict";

const User = require("../models/userModel");

module.exports = async (req, res, next) => {
  if (req?.session.email) {
    const { email, password } = req.session;
    const user = await User.findOne({ email });

    if (email == "admin@admin.com") {
      next();
    }else {
        res.errorStatusCode = 403
        throw new Error('You must be Admin.')
    }
    // if(user && user.password == password){

    //     req.user = user
    //     req.isLogin = true

    // }else{

    //     req.session = null
    //     req.isLogin = false
    // }
  }
//   next();
};
