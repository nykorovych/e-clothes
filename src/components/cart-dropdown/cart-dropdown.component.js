import React from "react";
import { connect } from "react-redux";

import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import {selectorCartItems} from '../../redux/cart/cart.selectors'

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((i) => {
          return <CartItem key={i.id} item={i}></CartItem>;
        })}
        <CustomButton> GO TO CHECK</CustomButton>
      </div>
    </div>
  );
};

const mstp = (state) => ({
  cartItems: selectorCartItems(state)
});
export default connect(mstp)(CartDropdown);
