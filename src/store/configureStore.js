import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import photosReducer from "../reducers/photos.js";
import authReducer from "../reducers/auth.js";
import filtersReducer from "../reducers/filters.js";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store creation
export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      photos: photosReducer,
      filters: filtersReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};


