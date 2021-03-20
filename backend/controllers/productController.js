import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

// @DESC      FETCH ALL PRODUCTS
// @ROUTE     GET /api/products
// @ACCESS    PUBLIC
const getProducts = asyncHandler(async (req, res) => {
  const pageSize = 2;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {};

  const count = await Product.countDocuments({ ...keyword });
  // GET THE CORRECT NUMBER OF PRODUCTS AND HAVE THEM IN ORDER WHEN YOU SEARCH
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ products, page, pages: Math.ceil(count / pageSize) });
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

// @DESC      CREATE A NEW REVIEW
// @ROUTE     POST /api/products/:id/reviews
// @ACCESS    PRIVATE
const createProductReview = asyncHandler(async (req, res) => {
  const { rating } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    );

    if (alreadyReviewed) {
      res.status(400);
      throw new Error('Product already reviewed');
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      user: req.user._id,
    };

    product.reviews.push(review);

    product.numReviews = product.reviews.length;

    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length;

    await product.save();
    res.status(201).json({ message: 'Review added' });
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
    name: 'New Product',
    price: 0,
    user: req.user._id,
    image: '/images/sample.jpg',
    category: 'Clothing',
    numReviews: 0,
    size: {
      small: 0,
      medium: 0,
      large: 0,
      xlarge: 0,
    },
    description: 'New Product description',
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
    product.price = Number(price);
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
  createProductReview,
};
