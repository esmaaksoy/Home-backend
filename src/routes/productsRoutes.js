"use strict"

const router = require("express").Router()
const {Products,ProductCategories} = require("../controllers/productsController")
const getCors = require("../middlewares/getCors")


router.route("/category").get(ProductCategories.list)
router.route("/category/:categoryName").get(Products.findByCategory)

router.route("/").get(getCors(),Products.list)
router.route("/:productId").get(getCors(),Products.read)


module.exports = router