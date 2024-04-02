"use strict";

const router = require("express").Router();

const User = require("../controllers/userController");

const postCors = require("../middlewares/postCors");

router.post("/login", postCors, User.login);

router.get("/logout", User.logout);

module.exports = router;
