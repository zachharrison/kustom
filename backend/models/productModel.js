import mongoose from 'mongoose';

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review',
      },
    ],
    rating: {
      type: Number,
      default: 0,
    },
    numReviews: {
      type: Number,
      default: 0,
    },
    price: {
      type: { $trunc: [Number, 2] },
      required: true,
      default: 0,
    },
    size: {
      small: { type: Number, required: true, default: 0 },
      medium: { type: Number, required: true, default: 0 },
      large: { type: Number, required: true, default: 0 },
      xlarge: { type: Number, required: true, default: 0 },
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
