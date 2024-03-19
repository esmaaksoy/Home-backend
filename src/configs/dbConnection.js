"use strict";

const mongoose = require('mongoose')

const MONGODB = process.env.MONGODB

mongoose.connect(MONGODB)
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log("DB  NOT Connected", err))