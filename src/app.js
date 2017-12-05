import React from "react";
import ReactDOM from "react-dom";
import AppRouter, { history } from "./routers/AppRouter.js";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore.js";
import { login, logout } from "./actions/auth.js";
import LoadingPage from "./components/LoadingPage.js";
import moment from "moment";
import "normalize.css/normalize.css";
import 'bulma/css/bulma.css';
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import { firebase } from "./firebase/firebase.js";
import { startSetPhotos } from "./actions/photos.js";

console.log("App.js is running");

const store = configureStore();

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
