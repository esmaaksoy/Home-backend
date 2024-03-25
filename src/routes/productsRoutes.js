"use strict"

const router = require("express").Router()
const {Products,ProductCategories} = require("../controllers/productsController")

router.route("/category").get(ProductCategories.list)
router.route("/category/:categoryName").get(Products.findByCategory)

router.route("/").get(Products.list)
router.route("/:productId").get(Products.read)


module.exports = router