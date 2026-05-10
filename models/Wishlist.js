import mongoose from "mongoose";

const WishlistSchema =
  new mongoose.Schema(
    {
      id: {
        type: String,
        required: true,
        unique: true,
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

      category: {
        type: String,
      },
    },
    {
      timestamps: true,
    }
  );

const Wishlist =
  mongoose.models.Wishlist ||
  mongoose.model(
    "Wishlist",
    WishlistSchema
  );

export default Wishlist;