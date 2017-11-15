import React from "react";
import 'react-dates/initialize';
import PhotoListFilters from "./PhotoListFilters.js";
import PhotoList from "./PhotoList.js";
import { firebase } from "../firebase/firebase.js";

let userName;

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log("name", user.displayName);
    userName = user.displayName;
  } else {
    console.log("no user signed in");
  }
});

const DashboardPage = () => (
  <div>
    <h1>{userName}'s Photos</h1>
    <PhotoListFilters />
    <PhotoList />
  </div>
);

export default DashboardPage;

