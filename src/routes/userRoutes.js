"use strict";

const router = require("express").Router()

const User = require("../controllers/userController")


router.route("/").post(User.create)

router.post("/login", User.login)
  
router.get("/logout", User.logout)


module.exports = router