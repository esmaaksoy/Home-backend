"use strict";

const mongoose = require("mongoose");
const validator = require("mongoose-validator");

function isValidURL(string) {
  try {
    new URL(string);
    return true;
  } catch (error) {
    return false;
  }
}

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
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductCategories",
    required: true,
  },

  title: { type: String, trim: true, required: true },
  description: { type: String, trim: true, required: true },
  price: { type: Number, required: true },
  discountPercentage: { type: Number, required: true },
  rating: { type: Number, required: true },
  stock: { type: Number, required: true },
  brand: { type: String, trim: true, required: true },
  thumbnail: {
    type: String,
    trim: true,
    required: true,
    validate: { validator: isValidURL, message: "URL must be required" },
  },

  images: [
    {
      type: String,
      trim: true,
      required: true,
      validate: {
        validator: isValidURL,
        message: "URL must be required",
      },
    },
  ],
});

module.exports = {
  Products: mongoose.model("Products", productShema),
  ProductCategories: mongoose.model("ProductCategories", productCategorySchema),
};
