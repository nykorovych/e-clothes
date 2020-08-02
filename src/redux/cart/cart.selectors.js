import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectorCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectorCartItems],
  (cartItems) =>
    cartItems.reduce((acc, value) => {
      return acc + value.quantity;
    }, 0)
);
