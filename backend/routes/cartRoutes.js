const express = require("express");
const router = express.Router();

// Sample in-memory cart data for demonstration
let carts = [];

// Get a cart by user ID
router.get("/:userId", async (req, res) => {
  const cart = carts.find((c) => c.userId === parseInt(req.params.userId));
  if (!cart) return res.status(404).send("Cart not found");
  res.json(cart);
});

// Create or update a cart
router.post("/", async (req, res) => {
  const { userId, products } = req.body;
  let cart = carts.find((c) => c.userId === userId);

  if (cart) {
    // Update existing cart
    cart.products = products;
  } else {
    // Create new cart
    cart = { userId, products };
    carts.push(cart);
  }

  res.status(200).json(cart);
});

// Export the router
module.exports = router;
