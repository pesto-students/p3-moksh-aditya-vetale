import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Counter from "./StepCounter";
import { store } from "./store";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <StrictMode>
      <Counter />
    </StrictMode>
  </Provider>
);
