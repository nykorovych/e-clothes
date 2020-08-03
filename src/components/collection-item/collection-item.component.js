import React from "react";
import { connect } from "react-redux";

import "./collection-item.style.scss";
import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart-action";

const CollectionItem = ({ item, add }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name} </span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={()=> add(item)} inverted>ADD TO CART</CustomButton>
    </div>
  );
};
const mdtp = (dispatch) => {
  return {
    add: (item) => {
      dispatch(addItem(item));
    },
  };
};
export default connect(null, mdtp)(CollectionItem);
