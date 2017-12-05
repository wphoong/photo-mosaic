import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import 'react-dates/initialize';
import PhotoListFilters from "./PhotoListFilters.js";
import PhotoList from "./PhotoList.js";
import { firebase } from "../firebase/firebase.js";
import getVisiblePhotos from "../selectors/photos.js";

let userName;

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log("name", user.displayName);
    userName = user.displayName;
  } else {
    console.log("no user signed in");
  }
});

export const DashboardPage = (props) => (
  <div className="content-container">
    <h1 className="header__secondary title is-2">{userName}'s Photos</h1>
    { props.photos.length !== 0 && <h3 className="header__secondary">Showing {props.photos.length} Photo(s)</h3>}
    <Link className="button is-primary is-outlined button--photo" to="/create">
      <h2 >Add Photo</h2>
    </Link>
    <PhotoListFilters />
    <PhotoList />
  </div>
);

const mapStateToProps = (state) => ({
  photos: getVisiblePhotos(state.photos, state.filters)
});

export default connect(mapStateToProps)(DashboardPage);

