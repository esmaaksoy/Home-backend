"use strict";

const express = require("express");
const app = express();
app.use(express.json());

require("dotenv").config();
const PORT = process.env.PORT;
const HOST = process.env.HOST;

//DB connection
require("./src/configs/dbConnection");

const session = require("cookie-session");
app.use(
  session({
    secret: process.env.SECRET_KEY,
  })
);

//Routes

app.all("/", (req, res) => {
  res.send({
    error: false,
    message: "WELCOME to HOME PRODUCTS PROJECT",
  });
});

app.use("/products", require("./src/routes/productsRoutes"));

app.use("/users", require("./src/routes/userRoutes"));

app.use("/admin", require("./src/routes/adminRoutes"))

app.listen(PORT, () =>
  console.log(` Server Running on http://${HOST}:${PORT}`)
);
