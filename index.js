const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const app = express();
app.use(express.json());
const productRoutes = require("./Routes/productRoutes");


// "mongodb+srv://manjarirathore1512:qojS21hvvtG8XGUw@cluster0.q50isny.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log("Failed" , err);
  });

app.use('/api/products' , productRoutes)

app.listen(8086, () => {
  console.log("Server sarted at port 8086");
});