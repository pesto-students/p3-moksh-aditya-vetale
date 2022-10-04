import { createStore } from "redux";

function Reducer(steps = 0, action) {
  switch (action.type) {
    case "ADD_STEP":
      return ++steps;
    case "RESET":
      return (steps = 0);
    default:
      return steps;
  }
}

export const store = createStore(Reducer);
