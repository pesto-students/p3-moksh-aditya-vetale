import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
export default function Counter() {
  const steps = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>You've walked {steps} today</h1>
      <div className="buttons">
        <button
          id="Add_button"
          onClick={() => {
            dispatch({ type: "ADD_STEP" });
          }}
        >
          {" "}
          Add a step{" "}
        </button>
        <button
          onClick={() => {
            dispatch({ type: "RESET" });
          }}
        >
          {" "}
          Reset steps{" "}
        </button>
      </div>
    </div>
  );
}
