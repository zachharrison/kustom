import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';

// @DESC      CREATE NEW ORDER
// @ROUTE     POST /api/orders
// @ACCESS    PRIVATE
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No order items');
  } else {
    const order = new Order({
      user: req.user._id,
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    const createdOrder = await Order.save();

    res.status(201).json(createdOrder);
  }
});

export { addOrderItems };
