import { useState } from "react";
import uuid4 from "uuid4";

export default function Todo() {
  const [todos, setTodos] = useState([
    { task: "Shahid Khan", id: uuid4(), isDone: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const updateValue = (event) => {
    setNewTodo(event.target.value);
  };

  const addTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuid4(), isDone: false }];
    });
    setNewTodo("");
  };
  const deleteTask = (id) => {
    const copy = todos.filter((todo) => {
      return todo.id != id;
    });
    // console.log(copy)
    setTodos(copy);
  };
  const upperCase = () => {
    const updating = todos.map((todo) => {
      return {
        ...todo,
        task: todo.task.toUpperCase(),
        id: uuid4(),
      };
    });
    setTodos(updating);
  };

  const updateUpperone = (id) => {
    const updating = todos.map((todo) => {
      if (todo.id == id)
        return {
          ...todo,
          task: todo.task.toUpperCase(),
          id: uuid4(),
        };
      else {
        return todo;
      }
    });

    setTodos(updating);
  };
  const markAsdoneAll = () => {
    const markdone = todos.map((todo) => {
      return { ...todo, isDone: true };
    });
    setTodos(markdone);
  };

  const markSingleDone = (id)=>{

    const markdone = todos.map((todo) => {
        if(todo.id == id){
            return { ...todo, isDone: true };
        }

        else{
            return todo;
        }
        
      });
      setTodos(markdone);
  }



  return (
    <div
      style={{
        border: "3px solid red",
        padding: "20px",
        boxShadow: "0px 0px 10px white",
      }}
    >
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Please Add A Task"
          value={newTodo}
          onChange={updateValue}
          style={{ padding: "10px", borderRadius: "10px", fontSize: "30px" }}
        />
        <button
          onClick={addTask}
          style={{
            fontSize: "10",
            marginLeft: "10px",
            border: "3px solid red",
          }}
        >
          Add
        </button>
      </div>
      <br />
      <br />
      <br />
      <hr />
      <ul style={{ fontSize: "30px", listStyle: "none" }}>
        {todos.map((todo) => {
          return (
            <li
              key={todo.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItem: "center",
                gap: "10px",
              }}
            >
              <span
                style={
                  todo.isDone
                    ? {
                        textDecorationLine: "line-through",
                        textDecorationColor: "red",
                        opacity: 0.3,
                      }
                    : {}
                }
              >
                {todo.task}
              </span>
              <button
                style={{ fontSize: "16px", padding: "10px", margin: "5px" }}
                onClick={() => deleteTask(todo.id)}
              >
                Delete
              </button>
              <button
                onClick={() => updateUpperone(todo.id)}
                style={{ fontSize: "16px", padding: "10px", margin: "5px" }}
              >
                UpperLetter
              </button>
              <button
                onClick={() => markSingleDone(todo.id)}
                style={{ fontSize: "16px", padding: "10px", margin: "5px" }}
              >
                Mark as done
              </button>
            </li>
          );
        })}
      </ul>
      <button
        onClick={upperCase}
        style={{
          fontSize: "20px",
          padding: "10px",
          margin: "8px",
          border: "4px solid red",
          boxShadow: "0px 0px 10px white",
        }}
      >
        UpperCaseAll
      </button>
      <button
        onClick={markAsdoneAll}
        style={{
          fontSize: "20px",
          padding: "10px",
          margin: "8px",
          border: "4px solid red",
          boxShadow: "0px 0px 10px white",
        }}
      >
        Mark as doneAll
      </button>
    </div>
  );
}
