import React from "react";
import ReactDOM from "react-dom";
import AppRouter, { history } from "./routers/AppRouter.js";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore.js";
import { login, logout } from "./actions/auth.js";
import LoadingPage from "./components/LoadingPage.js";
import moment from "moment";
import { addPhoto, removePhoto, editPhoto } from "./actions/photos.js";
import { setTextFilter, sortByDateAscend, sortByDateDescend } from "./actions/filters.js";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from "./firebase/firebase.js";


console.log("App.js is running");

// redux store
const store = configureStore();

const photoDemo1 = {
  id: 1,
  photoLink: "KRAPPA",
  title: "LUL",
  createdAt: moment(0).format("MMM Do, YYYY"),
  description: ""
};

const photoDemo2 = {
  id: 2,
  photoLink: "LMAO",
  title: "HEHEHE",
  createdAt: moment(1000).format("MMM Do, YYYY"),
  description: ""
};

const photoDemo3 = {
  id: 3,
  photoLink: "BOBA",
  title: "WTF SAUCE",
  createdAt: moment(-1000).format("MMM Do, YYYY"),
  description: ""
};

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addPhoto(photoDemo1));
const photo2 = store.dispatch(addPhoto(photoDemo2));
const photo3 = store.dispatch(addPhoto(photoDemo3));

// store.dispatch(removePhoto(photo3.photo));

// console.log(photo2.photo.id);

// store.dispatch(editPhoto(photo2.photo.id, {description: "EZ PZ"}));

// store.dispatch(setTextFilter("HELLO FOOL"));
store.dispatch(sortByDateAscend());
store.dispatch(sortByDateDescend());



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
    renderApp();
    if (history.location.pathname === "/") {
      history.push("/dashboard");
    }
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});

// Example dispatching

// store.dispatch(addExpense({description: "Water bill", amount: 4500}));
// store.dispatch(addExpense({description: "Gas bill", createdAt: 1241341}));
// store.dispatch(addExpense({description: "Boba bill", amount: 100, createdAt: 1000}));

// store.dispatch(setTextFilter("water"));

// setTimeout(()=> {
//   store.dispatch(setTextFilter("bill"));
// }, 3000);


// store subscription

// store.subscribe(() => {
//   const state = store.getState();
//   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//   console.log(visibleExpenses);
// });
