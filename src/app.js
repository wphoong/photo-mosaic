import React from "react";
import ReactDOM from "react-dom";
import AppRouter, { history } from "./routers/AppRouter.js";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore.js";
import { login, logout } from "./actions/auth.js";
import LoadingPage from "./components/LoadingPage.js";
import moment from "moment";
import { startAddPhoto, startSetPhotos } from "./actions/photos.js";
import { 
  setTextFilter, 
  sortByDateAscend, 
  sortByDateDescend,
  setStartDate,
  setEndDate } from "./actions/filters.js";
import getVisiblePhotos from "./selectors/photos.js";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from "./firebase/firebase.js";


console.log("App.js is running");

// redux store
const store = configureStore();

const photoDemo1 = {
  photoLink: "https://upload.wikimedia.org/wikipedia/en/2/22/Kirby_Wii.png",
  title: "LUL",
  createdAt: 0,
  description: ""
};
// moment(0).format("MMM Do, YYYY")

const photoDemo2 = {
  photoLink: "https://vignette.wikia.nocookie.net/blogclan-2/images/4/45/Random-turtle.gif/revision/latest?cb=20160706220110",
  title: "HEHEHE",
  createdAt: 100000000,
  description: ""
};

const photoDemo3 = {
  photoLink: "https://vignette.wikia.nocookie.net/pusheenthecat/images/e/e4/Pokepusheen.gif/revision/latest?cb=20130703160248",
  title: "WTF SAUCE",
  createdAt: -100000000,
  description: ""
};

// store.dispatch(startAddPhoto(photoDemo1));
// const photo2 = store.dispatch(startAddPhoto(photoDemo2));
// store.dispatch(startAddPhoto(photoDemo3));

const state = store.getState();
const visiblePhotos = getVisiblePhotos(state.photos, state.filters);
console.log(visiblePhotos);


const jsx = (
  <Provider store={store} >
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
}

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetPhotos()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});
