// external modules
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { logger } from "redux-logger";
import reduxPromise from "redux-promise";

// internal modules
import App from "./components/app";
import "../assets/stylesheets/application.scss";

// State and reducers
import CitiesReducer from "./reducers/cities_reducer";
import ActiveCityReducer from "./reducers/active_city_reducer";

const reducers = combineReducers({
  cities: CitiesReducer,
  activeCity: ActiveCityReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(logger, reduxPromise));

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
