"use strict"

const express = require("express")
const app = express()
app.use(express.json()) 

require("dotenv").config()
const PORT = process.env.PORT 
const HOST = process.env.HOST

require('./src/configs/dbConnection')

app.all("/", (req,res) => {
    res.send({
        error:false,
        message: "WELCOME to HOME PRODUCTS PROJECT"
    })
})

app.use("/products", require("./src/routes/productsRoutes"))
app.listen(PORT, () => console.log(` Server Running on http://${HOST}:${PORT}`))