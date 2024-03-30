"use strict";

const router = require("express").Router()

const Admin = require("../controllers/adminController")
const {Products,ProductCategories} = require("../controllers/productsController")

const auth = require('../middlewares/auth')

router.route('/')
    .get(auth.isAdmin,Admin.list)
    .post(auth.isAdmin,Admin.create)
    
router.route('/:userId')
    .delete(auth.isAdmin,Admin.delete)

router.route("/products").get(auth.isAdmin,Products.list).post(auth.isAdmin,Products.create)
router.route("/products/:productId").get(auth.isAdmin,Products.read).put(auth.isAdmin,Products.update).delete(auth.isAdmin,Products.delete)
router.route("/products/categories").get(auth.isAdmin,ProductCategories.list)
router.route("/products/category/:categoryName").get(auth.isAdmin,Products.findByCategory)

router.route("/categories").get(auth.isAdmin,ProductCategories.list).post(auth.isAdmin,ProductCategories.create)
router.route("/categories/:categoryId").get(auth.isAdmin,ProductCategories.read).put(auth.isAdmin,ProductCategories.update).delete(auth.isAdmin,ProductCategories.delete)

module.exports = router