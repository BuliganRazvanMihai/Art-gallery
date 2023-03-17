import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { createWrapper } from "next-redux-wrapper";
import { userSigninReducer } from "./reducers/userReducer.js";

// const initialState = {};
// let composeEnhancers = compose;

const reducer = combineReducers({
  userSignin: userSigninReducer,
});

// const middleware = [thunk];
// const enhancers = [applyMiddleware(...middleware)];

// const store = createStore(
//   reducer,
//   initialState,
//   composeEnhancers(...enhancers)
// );

// const composedMiddlewares = applyMiddleware(thunk);

// const storeEnhancers = composeWithDevTools({
//   name: "React-node-test",
// })(composedMiddlewares);

// const makeStore = () => {
//   return createStore(reducer, storeEnhancers);
// };

// const bindMiddleware = (middleware) => {
//   if (process.env.NODE_ENV !== "production") {
//     const { composeWithDevTools } = require("redux-devtools-extension");
//     return composeWithDevTools(applyMiddleware(...middleware));
//   }
//   return applyMiddleware(...middleware);
// };

export const makeStore = (context) => {
  //   const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer, applyMiddleware(thunk));
  return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });
