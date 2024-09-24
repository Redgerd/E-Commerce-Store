Here's a draft for the `README.md` file for your **MERN Stack Ecommerce Store**:

---

# MERN Stack Ecommerce Store

This is a full-stack e-commerce store built using the **MERN stack** (MongoDB, Express, React, Node.js). The application includes essential e-commerce functionalities, such as product searching, filtering, sorting, and a shopping cart.

## Features

- **Search Products**: Users can search for specific products using a search bar.
- **Filter Products**: Filter options based on categories, price ranges, and more.
- **Sort Products**: Products can be sorted by price, popularity, and other attributes.
- **Optimized Performance**: The application uses React's **Suspense** to load content efficiently and improve performance.
- **Responsive Design**: The website is fully responsive and works seamlessly on different devices.
  
### Pages
1. **Home Page**: Overview of the store's products with links to individual product pages.
2. **Products Page**: Displays a list of available products with filtering, sorting, and search options.
3. **Single Product Page**: Shows detailed information about a product, including images, price, description, and a button to add to the cart.
4. **About Page**: Provides information about the store and its team.
5. **Shopping Cart**: Users can view products added to their cart, adjust quantities, and proceed to checkout.

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js**: v14.0 or later
- **MongoDB**: Make sure MongoDB is running locally or remotely.
- **npm** or **yarn**: Package manager to install dependencies.

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://Redgerd/E-Commerce-Store.git
    cd E-Commerce-Store
    ```

2. **Install backend dependencies**:

    ```bash
    cd backend
    npm install
    ```

3. **Install frontend dependencies**:

    ```bash
    cd frontend
    npm install
    ```

4. **Environment Variables**:

    Create a `.env` file in the `backend` directory and add the following environment variables:

    ```env
    MONGO_URI=your_mongo_db_connection_string
    JWT_SECRET=your_jwt_secret
    ```

5. **Start the development server**:

    - To run both the backend and frontend in development mode:

      ```bash
      npm run dev
      ```

6. **Visit the app**:

    - Go to `http://localhost:3000` in your browser to see the app running.

---

## Technologies Used

### Backend (Node.js/Express)
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing product and user information.
- **Mongoose**: ODM for MongoDB to model database structure.
- **JWT (JSON Web Tokens)**: Used for user authentication.
- **Bcrypt.js**: For hashing user passwords.

### Frontend (React)
- **React.js**: JavaScript library for building user interfaces.
- **React Router**: To handle routing between different pages.
- **Axios**: For making API requests to the backend.
- **Redux**: For state management.
- **Suspense**: To improve load times and optimize performance by lazy-loading components.

---

## API Endpoints

### Products
- `GET /api/products` – Retrieve all products.
- `GET /api/products/:id` – Get a single product by its ID.
- `GET /api/products/search?query={searchTerm}` – Search for products by name.
- `POST /api/products` – Create a new product (admin only).

### Cart
- `POST /api/cart` – Add product to the shopping cart.
- `GET /api/cart` – Retrieve current user's cart items.

---

## Running Tests

To run unit and integration tests, you can use:

```bash
npm run test
```

---

## Optimizations

### React Suspense
To enhance performance, **React Suspense** is used to dynamically load components and optimize loading times for larger sections of the website.

### Code Splitting
We also use **code splitting** to load only the required JavaScript for the current page. This reduces initial load time and improves overall app performance.

---
![demo](https://github.com/user-attachments/assets/ef91b5fa-2bd5-48b2-b0c6-ada52e833a0a)
