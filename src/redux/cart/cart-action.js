import CartActionType from "./cart.types";

export const toggleAction = () => {
  return {
    type: CartActionType.TOGGLE_CART_HIDDEN,
  };
};


export const addItem = item => {
  return {
    type: CartActionType.ADD_ITEM,
    payload: item
  }
}