import React from "react";
import { createRoot } from "react-dom/client";
import Display from "./Display";
import { Provider } from "react-redux";
import { store } from "./store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <Display />
  </Provider>
);
