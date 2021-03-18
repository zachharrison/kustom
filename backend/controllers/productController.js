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

// @DESC      CREATE A PRODUCT
// @ROUTE     POST /api/products
// @ACCESS    PRIVATE/ADMIN
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: 'Sample Name',
    price: 0,
    user: req.user._id,
    image: '/images/sample.jpg',
    category: 'sample',
    numReviews: 0,
    size: {
      small: 0,
      medium: 1,
      large: 5,
      xlarge: 4,
    },
    description: 'Sample description',
  });

  const createdProduct = await product.save();

  res.status(201).json(createdProduct);
});

// @DESC      UPDATE A PRODUCT
// @ROUTE     PUT /api/products/:id
// @ACCESS    PRIVATE/ADMIN
const updateProduct = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    description,
    image,
    category,
    size: { small, medium, large, xlarge },
    numReviews,
    rating,
  } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.size = {
      small,
      medium,
      large,
      xlarge,
    };
    product.name = name;
    product.price = price;
    product.decription = description;
    product.image = image;
    product.category = category;
    product.numReviews = numReviews;
    product.rating = rating;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }

  const createdProduct = await product.save();

  res.status(201).json(product);
});

export {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
};
