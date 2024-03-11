import React from "react";
import TaskItem from "./components/Task";
import UserItem from "./components/User";
import "./App.css";

function App() {
  return (
    <>
      <h2>Kомпонент задачи</h2>
      <TaskItem />
      <h2>Компонент пользователя</h2>

      <UserItem />
    </>
  );
}

export default App;
