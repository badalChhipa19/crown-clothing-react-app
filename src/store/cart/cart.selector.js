import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartCount = createSelector(
  [selectCartItems],
  (newCartItems) =>
    newCartItems.reduce((acu, cur) => {
      return acu + cur.quantity;
    }, 0)
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (newCartItem) =>
    newCartItem.reduce((acu, cur) => {
      return acu + cur.quantity * cur.price;
    }, 0)
);
