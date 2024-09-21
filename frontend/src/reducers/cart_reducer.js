import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  CHECKOUT,
} from "../utils/actions";

export const cart_reducer = (state, action) => {
  const { type, payload } = action;

  if (type === ADD_TO_CART) {
    const { product, amount } = payload;
    const existingItem = state.cart.find((item) => item.id === product.id);

    if (existingItem) {
      // Update amount if item already exists in cart
      const updatedCart = state.cart.map((item) =>
        item.id === existingItem.id
          ? { ...item, amount: item.amount + amount }
          : item
      );
      return { ...state, cart: updatedCart };
    } else {
      // Add new item to cart
      const newItem = {
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        amount,
      };
      return { ...state, cart: [...state.cart, newItem], isCheckout: false };
    }
  }

  if (type === TOGGLE_CART_ITEM) {
    const { id, value } = payload;
    const updatedCart = state.cart.map((item) => {
      if (item.id === id) {
        const newAmount =
          value === "inc" ? item.amount + 1 : Math.max(item.amount - 1, 1);
        return { ...item, amount: newAmount };
      }
      return item;
    });
    return { ...state, cart: updatedCart };
  }

  if (type === REMOVE_CART_ITEM) {
    const updatedCart = state.cart.filter((item) => item.id !== payload);
    return { ...state, cart: updatedCart };
  }

  if (type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (type === COUNT_CART_TOTALS) {
    const { total_items, total_price } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem;
        total.total_items += amount;
        total.total_price += price * amount;
        return total;
      },
      { total_price: 0, total_items: 0 }
    );
    return { ...state, total_items, total_price };
  }

  if (type === CHECKOUT) {
    return {
      ...state,
      isCheckout: true,
      cart: [],
    };
  }

  throw new Error(`No Matching "${type}" - action type`);
};
