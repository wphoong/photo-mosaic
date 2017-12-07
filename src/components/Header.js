import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogOut } from "../actions/auth.js";

export const Header = ({ startLogOut }) => (
  <header className="header" >
    <div className="content-container">
      <div className="header__content">
        <Link className="title header__title is-3" to="/dashboard">
          <h1>Photo Mosaic</h1>
        </Link>
        <button className="button is-primary" onClick={startLogOut} >Log Out</button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogOut: () => dispatch(startLogOut())
});

export default connect(undefined, mapDispatchToProps)(Header);
