import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

// @DESC      FETCH ALL PRODUCTS
// @ROUTE     GET /api/products
// @ACCESS    PUBLIC
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @DESC      FETCH A SINGLE PRODUCT
// @ROUTE     GET /api/products/:id
// @ACCESS    PUBLIC
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

/*~~~~~~~~~~~~~~ ADMIN ~~~~~~~~~~~~~~~~~*/

// @DESC      DELETE A SINGLE PRODUCT
// @ROUTE     DELETE /api/products/:id
// @ACCESS    PRIVATE/ADMIN
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: 'Product removed' });
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

export { getProducts, getProductById, deleteProduct };
