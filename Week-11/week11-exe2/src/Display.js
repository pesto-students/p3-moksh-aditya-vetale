import "./index.css";
// import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

// export default connect((state) => {
//   return { state: state };
// })(Display);

export default function Display() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const classname = state ? "lit" : "dark";
  return (
    <div className={`room ${classname}`}>
      the room is {classname}
      <br />
      <button
        onClick={() => {
          dispatch({
            type: "TOGGLE"
          });
        }}
      >
        flip
      </button>
    </div>
  );
}
