import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [array, setArray] = useState([]);
  function addToArray(event) {
    console.log("task-", task);
    setArray([...array, task]);
    setTask("");
    console.log(array);
  }

  function deleteItem(id) {
    setArray(array.filter((e, ind) => ind !== id));
    console.log(id);
  }
  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="input">
        <input
          className="addTasks"
          placeholder="⌨ Add your tasks here... "
          value={task}
          onChange={(event) => {
            setTask(event.target.value);
          }}
        ></input>
        <i
          className="fa-solid fa-plus"
          id="plusSign"
          onClick={addToArray}
          title="Add item"
        ></i>
      </div>
      <div className="output">
        {array.map((ele, ind) => {
          return (
            <div className="List" key={ind}>
              {ele}{" "}
              <i
                className="fa-solid fa-trash"
                onClick={() => deleteItem(ind)}
                title="Delete Task"
              ></i>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
