import React, { useState } from "react";
import "./App.scss";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love Easy FrontEnd!" },
    { id: 2, title: "We love Easy FrontEnd!" },
    { id: 3, title: "They love Easy FrontEnd!" },
  ]);
  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) {
      return;
    }
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }
  return (
    <div className="app">
      <h1> Welcome -TodoList</h1>
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
