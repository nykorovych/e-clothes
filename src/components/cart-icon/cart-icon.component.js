import React from "react";
import { connect } from "react-redux";
import { toggleAction } from "../../redux/cart/cart-action";
import { createStructuredSelector} from 'reselect'

import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggle, itemsCount }) => {
  return (
    <div className="cart-icon" onClick={toggle}>
      <ShoppingIcon className="shopping-icon"></ShoppingIcon>
      <span className="item-count">{itemsCount}</span>
    </div>
  );
};
const mdtp = (dispatch) => ({
  toggle: () => dispatch(toggleAction()),
});

const mstp = createStructuredSelector({
  itemsCount: selectCartItemsCount
});

export default connect(mstp, mdtp)(CartIcon);
