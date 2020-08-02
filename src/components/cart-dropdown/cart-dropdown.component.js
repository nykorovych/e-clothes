import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectorCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { toggleAction } from "../../redux/cart/cart-action";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((i) => {
            return <CartItem key={i.id} item={i}></CartItem>;
          })
        ) : (
          <span className="empty-message"> Your cart is empty</span>
        )}
        <CustomButton
          onClick={() => {
            history.push("/checkout");
            dispatch(toggleAction());
          }}
        >
          {" "}
          GO TO CHECK
        </CustomButton>
      </div>
    </div>
  );
};

const mstp = createStructuredSelector({
  cartItems: selectorCartItems,
});
export default withRouter(connect(mstp)(CartDropdown));
