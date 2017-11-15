import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth.js";

console.log("connected to login page");

export const LoginPage = ({startLogin}) => (
  <div className="box-layout" >
    <div className="box-layout__box">
      <h1 className="box-layout__title">Photo Mosaic</h1>
      <p>Enjoy your photos anytime!</p>
      <button className="button" onClick={startLogin}>Login with Google</button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);