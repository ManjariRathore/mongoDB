const  productController = require('../controllers/productController.js');
const router = require('express').Router();

//create

router.post('/', productController.createProduct);


//Read

router.get('/', productController.getAllProducts);


//get by id

router.get('/:id', productController.getProductById);


//update

router.put('/:id', productController.updateProductById);


//delete

router.delete('/:id', productController.deleteProductById );

module.exports = router;