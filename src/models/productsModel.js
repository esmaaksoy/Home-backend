"use strict";

const mongoose = require("mongoose");

const productCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { collection: "productCategory", timestamps: true }
);

const productShema = new mongoose.Schema({
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductCategories",
    required: true,
  },

  title: { type: String, trim: true, required: true },
  description: {type: String, trim: true, required: true},
  price: {type: Number, trim: true, required: true},
  discountPercentage: {type: Number, trim: true, required: true},
  rating: {type: Number, trim: true, required: true},
  stock: {type: Number, trim: true, required: true},
  brand: {type: String, trim: true, required: true},
  thumbnail: {type: String, trim: true, required: true},
  images: [{type: String, trim: true, required: true}],
  __v: {},
});

module.exports = {
  Products: mongoose.model("Products", productShema),
  ProductCategories: mongoose.model("ProductCategories", productCategorySchema),
};
