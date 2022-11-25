import React, { useState } from "react";
import "./Todo.css";

let nextId = 2;
const initialArtists = [
  { id: 0, todo: "Cleaning", isComplete: false },
  { id: 1, todo: "Work React", isComplete: false },
];

const Todo = () => {
  const [list, setList] = useState(initialArtists);
  const [todo, setTodo] = useState("");
  
  const AddTodo = () => {
    setList(current => [
      ...current,
      { id: nextId++, todo: todo, isComplete: false },
    ]);
    setTodo("");
  };

  const Done = (val) => {
    setList(
      list.map((el) =>
        el.id === val.id ? { ...el, isComplete: !el.isComplete } : { ...el }
      )
    );
  };

  const Delete = (val) => {
    if (val.isComplete === true) {
      setList(list.filter((item) => item.id !== val.id));
    } else {
      alert("You can't delete it because you haven't completed it");
    }
  };

  return (
    <div className="TodoApp">
      <div className="TodoForm">
        <span className="HeaderSpan">Todo List</span>
        <div className="Header">
          <input
            className="HeaderInput"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
            placeholder="Todo"
            maxLength={9}
          />
          <button className="HeaderButton" onClick={AddTodo}>
            Add Todo
          </button>
        </div>
        <div className="Container">
          {list.map((val) => (
            <div className="ContainerTodos" key={val.id}>
              <div className={val.isComplete ? "Done" : "NotDone"}>
                {val?.todo}
              </div>
              <div className="ButtonGroup">
                <button className="DoneButton" onClick={() => Done(val)}>
                  Done
                </button>
                <button className="DeleteButton" onClick={() => Delete(val)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
