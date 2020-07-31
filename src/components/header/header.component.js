import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./header.styles.scss";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";

const Header = ( {currentUser} ) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/">
          Home
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out{" "}
          </div>
        ) : (
          <Link className="option" to="/signin">
            SignIn
          </Link>
        )}
      </div>
    </div>
  );
};
const mstp = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mstp)(Header);
