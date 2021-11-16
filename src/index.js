import React from "react";
import ReactDOM from "react-dom";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { configureStore } from "./store";
import App from "./App.js";

const store = configureStore();
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store} >
    <PersistGate persistor={persistor} loading={<div>Loading...</div>} >
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
