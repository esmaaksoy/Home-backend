"use strict";

const { Products, ProductCategories } = require("../models/productsModel");

module.exports.ProductCategories = {
  list: async (req, res) => {
    const data = await ProductCategories.find();
    res.status(200).send({ error: false, data: data });
  },
  create: async (req, res) => {
    const data = await ProductCategories.create(req.body);
    res.status(201).send({ error: false, body: req.body, data: data });
  },
  read: async (req, res) => {
    const data = await ProductCategories.findOne({
      _id: req.params.categoryId,
    });
    res.status(202).send({ error: false, data: data });
  },
  update: async (req, res) => {},
  delete: async (req, res) => {},
};

module.exports.Products = {
  list: async (req, res) => {
    const data = await Products.find().populate('category',"name-_id");;
    res.status(200).send({
      error: false,
      data: data,
    });
  },
  create: async (req, res) => {
    const data = await Products.create(req.body);
    res.status(201).send({
      error: false,
      body: req.body,
      data: data,
    });
  },
  read: async (req, res) => {
    const data = await Products.findOne({ _id: req.params.productId }).populate('category',"name-_id");
    res.status(202).send({ error: false, data: data });
  },
  update: async (req, res) => {},
  delete: async (req, res) => {},
  findByCategory: async (req, res) => {

    const category = await ProductCategories.findOne({ name: req.params.categoryName });
    if (!category) {
      return res.status(404).send({ error: true, message: "Kategori bulunamadı." });
    }
    
    const products = await Products.find({ category: category._id }).populate('category', "name-_id");
    res.status(200).send({ error: false, data: products });
  }

};
