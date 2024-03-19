"use strict"

const router = require("express").Router()
const {Products,ProductCategories} = require("../controllers/productsController")

router.route("/").post(Products.create)
router.route("/:id").get(Products.read)

router.route("/category")
router.route("/category/:name")


module.exports = router