import { createStore } from "redux";

function Reducer(currentState = true, action) {
  switch (action.type) {
    case "TOGGLE":
      currentState = !currentState;
      return currentState;
    default:
      return currentState;
  }
}

const store = createStore(Reducer);

export { store };
