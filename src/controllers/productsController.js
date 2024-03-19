"use strict";

const { Products, ProductCategories } = require("../models/productsModel");

module.exports.ProductCategories = {
  // list: async (req,res) => {},
  create: async (req, res) => {
    const data = await ProductCategories.create(req.body);
    res.status(201).send({ error: false, body: req.body, data: data });
  },
};

module.exports.Products = {
  // list: async (req,res) => {},
  create: async (req, res) => {
    const data = await Products.create(req.body);
    res.status(201).send({
      error: false,
      body: req.body,
      data: data,
    });
  },
  read: async (req,res) =>{
    const data = await Products.findOne({_id: req.params.productId}).populate('productCategoryId',"name -_id");
    res.status(202).send({error:false, data: data})
  }
};
