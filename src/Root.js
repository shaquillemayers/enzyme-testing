import React from "react";
import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import reducers from "reducers";

export default ({ children, initialSate = {} }) => {
  const store = createStore(
    reducers,
    initialSate,
    applyMiddleware(reduxPromise)
  );
  return <Provider store={store}>{children}</Provider>;
};
