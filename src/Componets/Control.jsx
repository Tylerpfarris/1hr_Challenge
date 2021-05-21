import React, { useState } from "react";
import TodoList from "./TodoList";

const Controls = () => {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");
  const [done, setDone] = useState(false);

  const handleTodoChange = ({ target }) => {
    setTodo(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList([...todo]);
    setTodo("");
  };

  const handleDelete = () => {};

  const handleDone = () => {};
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter todo"
          value={todo}
          onChange={handleTodoChange}
        />
        <button>submit</button>
      </form>
      <TodoList todo={todoList} done={done} handleDelete={handleDelete} />
    </>
  );
};
export default Controls;
