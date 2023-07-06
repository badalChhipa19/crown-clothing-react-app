import { CART_ACTION_TYPES } from "./cart.type";
import { createAction } from "../../utils/reducer/reducer.util";

const addCartItem = (cartItem, productToAdd) => {
  // check If Item exist or not
  const existingCartItem = cartItem.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  // If yes, increse the quantity
  if (existingCartItem) {
    return cartItem.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // return new array with modified cart item/ new Cart item
  return [...cartItem, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItem, cartItemToRemove) => {
  const existingCartItem = cartItem.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItem.filter((item) => item.id !== cartItemToRemove.id);
  }

  return cartItem.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItem, cartitemToClear) => {
  return cartItem.filter((item) => item.id !== cartitemToClear.id);
};

// !---------------------------------------------------------
export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

// !---------------------------------------------------------
export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const removeItemToCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const clearItemFromCart = (cartItems, cartitemToClear) => {
  const newCartItems = clearCartItem(cartItems, cartitemToClear);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
