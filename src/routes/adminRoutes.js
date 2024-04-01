"use strict";

const router = require("express").Router();

const Admin = require("../controllers/adminController");
const {
  Products,
  ProductCategories,
} = require("../controllers/productsController");

const auth = require("../middlewares/auth");

router.use(auth.isAdmin);

router.route("/").get(Admin.list).post(Admin.create);

router.route("/:userId").delete(Admin.delete);

router.route("/products").get(Products.list).post(Products.create);
router
  .route("/products/:productId")
  .get(Products.read)
  .put(Products.update)
  .delete(Products.delete);
router.route("/products/categories").get(ProductCategories.list);
router.route("/products/category/:categoryName").get(Products.findByCategory);

router
  .route("/categories")
  .get(ProductCategories.list)
  .post(ProductCategories.create);
router
  .route("/categories/:categoryId")
  .get(ProductCategories.read)
  .put(ProductCategories.update)
  .delete(ProductCategories.delete);

module.exports = router;
