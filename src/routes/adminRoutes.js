"use strict";

const router = require("express").Router()

const Admin = require("../controllers/adminController")

router.route('/')
    .get(Admin.list)
    .post(Admin.create)
    
router.route('/:userId')
    .get(Admin.read)
    .put(Admin.update) 
    .patch(Admin.update)
    .delete(Admin.delete)

module.exports = router