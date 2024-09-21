import React, { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios"; // Import Axios
import { cart_reducer as reducer } from "../reducers/cart_reducer";

import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  CHECKOUT,
} from "../utils/actions";

const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(cart);
  } else {
    return [];
  }
};

const initialState = {
  cart: getLocalStorage(),
  total_price: 0,
  total_items: 0,
  isCheckout: false,
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  //? Handlers
  const addToCart = async (product, amount) => {
    // Optional: Save cart item to backend
    try {
      await axios.post("http://localhost:5000/api/cart", { product, amount });
      dispatch({ type: ADD_TO_CART, payload: { product, amount } });
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const toggleAmount = (id, value) => {
    dispatch({ type: TOGGLE_CART_ITEM, payload: { id, value } });
  };

  const removeItem = async (id) => {
    // Optional: Remove cart item from backend
    try {
      await axios.delete(`http://localhost:5000/api/cart/${id}`);
      dispatch({ type: REMOVE_CART_ITEM, payload: id });
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const clearCart = async () => {
    // Optional: Clear cart in backend
    try {
      await axios.delete("http://localhost:5000/api/cart");
      dispatch({ type: CLEAR_CART });
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  };

  const checkout = async () => {
    // Optional: Implement checkout process
    try {
      await axios.post("http://localhost:5000/api/checkout", {
        cart: state.cart,
      });
      dispatch({ type: CHECKOUT });
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        toggleAmount,
        removeItem,
        clearCart,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
