const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  products: [{ productId: Number, quantity: Number }],
});

module.exports = mongoose.model("Cart", cartSchema);
