"use strict";

const router = require("express").Router();
const User = require("../controllers/userController");
const postCors = require("../middlewares/postCors");

router.route("/login").post(postCors(), User.login);

router.route("/logout").get(User.logout);

module.exports = router;
