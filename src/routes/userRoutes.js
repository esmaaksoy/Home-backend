"use strict";

const router = require("express").Router();
const User = require("../controllers/userController");
const postCors = require("../middlewares/postCors");
const getCors = require("../middlewares/getCors")

// router.route("/login").post(postCors(), User.login);
router.route("/login").all(postCors()).post(User.login);

router.route("/logout").get(getCors(),User.logout);

module.exports = router;
