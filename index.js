const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const app = express();
app.use(express.json());
const productRoutes = require("./Routes/productRoutes");
const userRoutes = require("./Routes/userRoutes");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log("Failed" , err);
  });

app.use('/api/products' , productRoutes)
app.use('/api/Users' , userRoutes)

app.listen(8086, () => {
  console.log("Server sarted at port 8086");
});