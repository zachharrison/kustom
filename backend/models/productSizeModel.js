import mongoose from 'mongoose';

const productSizeSchema = mongoose.Schema(
  {
    small: {
      type: Number,
      required: true,
      default: 0,
    },
    medium: {
      type: Number,
      required: true,
      default: 0,
    },
    large: {
      type: Number,
      required: true,
      default: 0,
    },
    xlarge: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const ProductSize = mongoose.model('ProductSize', productSizeSchema);

export default ProductSize;
