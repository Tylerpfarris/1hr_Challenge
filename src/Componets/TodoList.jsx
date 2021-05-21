import React from "react";
import { Todo } from "./Todo";

function TodoList({ todos }) {
  return (
    <>
      <ul>
        {todos &&
          todos.map(({ id, todo, done, handleDelete }) => (
            <li key={id}>
              <Todo todo={todo} done={done} handleDelete={handleDelete} />
            </li>
          ))}
      </ul>
    </>
  );
}

export default TodoList;
