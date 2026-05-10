import mongoose from "mongoose";

const CartSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    price: {
      type: String,
      required: true,
    },

    image: {
      type: String,
    },

    size: {
      type: String,
      required: true,
    },

    quantity: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);



// ✅ IMPORTANT
// SAME PRODUCT + SAME SIZE DUPLICATE NAHI HOGA
CartSchema.index(
  { id: 1, size: 1 },
  { unique: true }
);



const Cart =
  mongoose.models.Cart ||
  mongoose.model("Cart", CartSchema);

export default Cart;