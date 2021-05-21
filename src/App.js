import "./styles.css";
import React from "react";
import TodoContainer from "../src/container/TodoContainer";
export default function App() {
  return (
    <div className="App">
      <h1>Todos</h1>
      <TodoContainer />
    </div>
  );
}
