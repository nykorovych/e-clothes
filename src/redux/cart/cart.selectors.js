import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectorCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)

export const selectCartItemsCount = createSelector(
  [selectorCartItems],
  (cartItems) =>
    cartItems.reduce((acc, value) => {
      return acc + value.quantity;
    }, 0)
);

export const selectorCartTotal = createSelector(
  [selectorCartItems],
  (cartItems) => cartItems.reduce((accumulatedQuantity, cartItem) => {
    return accumulatedQuantity + cartItem.quantity * cartItem.price
  },0)
  
    
)