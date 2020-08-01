import React from "react";
import { connect } from 'react-redux'
import { toggleAction} from '../../redux/cart/cart-action'

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = ({toggle}) => {
  return (
    <div className="cart-icon" onClick={toggle}>
      <ShoppingIcon className="shopping-icon"></ShoppingIcon>
      <span className="item-count">0</span>
    </div>
  );
};
const mdtp = dispatch => ({
  toggle: ()=> dispatch(toggleAction())
})

export default connect (null, mdtp) (CartIcon);
