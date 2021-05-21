import React from "react";

function Todo({ id, todo, handleDelete, done }) {
  return (
    <section>
      <p>{todo}</p>
      <input type="checkbox" value={done} />
      <button onClick={handleDelete}>delete</button>
    </section>
  );
}

export default Todo;
