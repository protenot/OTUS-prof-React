import React from "react";
import Task from "./components/Task";
import User from "./components/User";
import "./App.css";

function App() {
  return (
    <>
      <h2>Kомпонент задачи</h2>
      <Task />
      <h2>Компонент пользователя</h2>

      <User />
    </>
  );
}

export default App;
