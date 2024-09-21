require("dotenv").config(); // Load environment variables

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios"); // To fetch data from the FakeStore API
const Product = require("./models/Product"); // Assuming you have a Product model
const productRoutes = require("./routes/productRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    return resetProducts(); // Remove all products and insert new data from the API
  })
  .then(() => {
    console.log("Product reset process complete.");
  })
  .catch((err) => console.error("MongoDB connection error:", err));

// Function to remove all products and populate from FakeStore API
async function resetProducts() {
  try {
    // Remove all existing products from the collection
    await Product.deleteMany({});
    console.log("All products removed from the database.");

    // Fetch products from FakeStore API
    const { data } = await axios.get("https://fakestoreapi.com/products");
    console.log("Fetched products from FakeStore API.");

    // Insert fetched products into the database
    await Product.insertMany(data);
    console.log("Inserted products into the database.");
  } catch (err) {
    console.error("Error resetting products:", err);
    throw err; // Re-throw to catch it during the startup process
  }
}

// Use the product routes (ensure routes are set up after product data reset)
app.use("/api/products", productRoutes);

// Sample route for testing
app.get("/", (req, res) => {
  res.send("API is working. Check /api/products for product routes.");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
