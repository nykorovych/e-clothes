import CartActionType from "./cart.types";

export const toggleAction = () => {
  return {
    type: CartActionType.TOGGLE_CART_HIDDEN,
  };
};
