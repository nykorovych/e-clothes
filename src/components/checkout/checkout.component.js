import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectorCartItems,
  selectorCartTotal,
} from "../../redux/cart/cart.selectors";

import "./checkout.styles.scss";
import CheckoutItem from "../checkout-item/checkout-item.component";

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Products</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Products</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem cartItem={cartItem} key={cartItem.id}></CheckoutItem>
      ))}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
    </div>
  );
};

const mstp = createStructuredSelector({
  cartItems: selectorCartItems,
  total: selectorCartTotal,
});
export default connect(mstp)(CheckoutPage);
