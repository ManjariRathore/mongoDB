const productModel = require("../Models/product");

//put
exports.createProduct = async (req, res) => {
  if (req.body === null) console.log("Empty");
  const product = productModel.create({
    product_name: req.body.product_name,
    product_price: req.body.product_price,
    isInStock: req.body.isInStock,
    category: req.body.category,
  });
  console.log(product);
  //201 stands for created ;
  return res.status(201).json({ message: "Product Created" });
};

//get all inStock
exports.getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find({ isInStock: true });
    //200 response code that indicates a successful request from a client to a server
    return res.status(200).json({ products });
  } catch (err) {
    //The HTTP status code 500 is a generic error response
    return res
      .status(500)
      .json({ message: "Server Error", error: err.message });
  }
};

//getById
exports.getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await productModel.findById(id);

    if (!product) {
      // status code that indicates a web server can't find a requested resource
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(200).json({ product });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server Error", error: err.message });
  }
};

//Update
exports.updateProductById = async (req, res) => {
  const { id } = req.params;
  const { product_name, product_price, isInStock, category } = req.body;
  // const product = await productModel.findByIdAndUpdate(req.params.id,req.body);
  // return res.json(product);
  try {
    const product = await productModel.findByIdAndUpdate(
      id,
      { product_name, product_price, isInStock, category },
      { new: true, runValidators: true }
    );

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json({ message: "Product Updated", product });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server Error", error: err.message });
  }
};

//delete
exports.deleteProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await productModel.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json({ message: "Product Deleted", product });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server Error", error: err.message });
  }
};
