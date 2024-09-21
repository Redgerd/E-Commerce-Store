const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Product = require("../models/Product"); // Adjust the path as needed

// Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find(); // Fetch from MongoDB
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a product by ID
// Get a product by custom id
router.get("/:id", async (req, res) => {
  const productId = req.params.id; // Get the custom id from the URL

  // Check if productId is a valid number
  if (!/^\d+$/.test(productId)) {
    return res.status(400).send("Invalid ID format");
  }

  try {
    const product = await Product.findOne({ id: parseInt(productId, 10) }); // Search by custom id
    if (!product) {
      return res.status(404).send("Product not found");
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new product
router.post("/", async (req, res) => {
  const newProduct = new Product({
    name: req.body.name,
    price: req.body.price,
  });

  try {
    const savedProduct = await newProduct.save(); // Save to MongoDB
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Export the router
module.exports = router;
