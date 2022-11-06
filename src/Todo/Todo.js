import React, { useState } from 'react'
import "./Todo.css"

const Todo = () => {
    const [list, setList] = useState([{id:1 ,todo:"Cleaning", isComplete:false}]);
    const [todo, setTodo] = useState("");
    const [number, setNumber] = useState(2);

    const AddTodo = () => {
        let copyArray = [...list]
        let copyNumber = (number)
        copyNumber += 1
        setNumber(copyNumber)
        copyArray.push({
            id: number,
            todo:todo,
            isComplete:false
        })
        setList(copyArray)
        setTodo("")
    }

    const Done = (val) => {
        setList(
            list.map(el => 
            el.id === val.id ? {...el, isComplete: !el.isComplete} : {...el}
            )
        )
    }

    const Delete = (val) => {
        if (
            val.isComplete === true
        ) {
            setList(list.filter(item => item.id !== val.id))
        } else {
            alert("You can't delete it because you haven't completed it")
        }
    }

  return (
    <div className="TodoApp">
        <div className="TodoForm">
        <span className="HeaderSpan">Todo List</span>
        <div className="Header"> 
            <input className="HeaderInput" onChange={(e) => setTodo(e.target.value)} value={todo}  placeholder="Todo" maxLength={9}/>
            <button className="HeaderButton" onClick={AddTodo}>Add Todo</button>
        </div>
        <div className="Container">
            {list.map((val) => (
                <div className="ContainerTodos" key={val.id}>
                <div className={val.isComplete ? "Done" : "NotDone"}>
                    {val?.todo}
                </div>
                <div className="ButtonGroup"> 
                    <button className="DoneButton" onClick={() => Done(val)}>Done</button> 
                    <button className="DeleteButton" onClick={() => Delete(val)}>Delete</button>
                </div>
                </div>
            ))}
        </div>
        </div>
    </div>
  )
}

export default Todo;