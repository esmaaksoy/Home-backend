"use strict";

const Admin = require("../models/userModel")

module.exports = {

    list: async (req, res) => {
        const data = await Admin.find()
        res.status(200).send({
            error: false,
            data: data
        })
    },
    create: async (req, res) => {
        const data = await Admin.create(req.body)
        res.status(201).send({
            error: false,
            body: req.body,
            data: data
        })
    },
    read: async (req, res) => {
        const data = await Admin.findOne({ _id: req.params.userId })
        res.status(202).send({
            error: false,
            data: data
        })
    },
    update: async (req, res) => {
        const data = await Admin.updateOne({ _id: req.params.userId }, req.body)
        const newdata = await Admin.findOne({ _id: req.params.userId })
        res.status(202).send({
            error: false,
            body: req.body,
            data: data, 
            newdata: newdata
        })
    },
    delete: async (req, res) => {
        const data = await Admin.deleteOne({ _id: req.params.userId })
        res.sendStatus((data.deletedCount >= 1) ? 204 : 404)
    },
}