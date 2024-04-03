"use strict";

const express = require("express");
const app = express();
app.use(express.json());

//dotenv 
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


app.use(require("./src/middlewares/queryHandler"))

//Routes

app.all("/", (req, res) => {

  if (req.isLogin) {
    res.send({
      error: false,
      message: "WELCOME to HOME PRODUCTS PROJECT",
      session: req.session,
      user: req.user,
    });

  } else {
    res.send({
      error: false,
      message: "WELCOME to HOME PRODUCTS PROJECT",
      session: req.session,
    });
  }
});

app.use("/products", require("./src/routes/productsRoutes"));

app.use("/users", require("./src/routes/userRoutes"));

app.use("/admin", require("./src/routes/adminRoutes"));


//Middleware
app.use(require("./src/middlewares/errorHandler"))



//Listen PORT

app.listen(PORT, () =>
  console.log(` Server Running on http://${HOST}:${PORT}`)
);

// require('./src/sync')()