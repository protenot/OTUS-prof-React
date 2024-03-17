//import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import TaskList from "./components/TaskList";
import UserItem from "./components/User";
import "./App.css";


import TaskItem from './components/Task';

function App() {
 
  return (
    <BrowserRouter>
    <div>
      <nav>
        <ul>
          <li>
            <Link to ='/'>Домашняя</Link>
          </li>
          <li>
            <Link to ='/tasks'>Задачи</Link>
          </li>
          <li>
            <Link to ="/users">Пользователи</Link>
          </li>
        </ul>
      </nav>
      <Routes>
      <Route path="/" element = {<UserItem/>} />
      <Route path="/tasks" element = {<TaskList/>} />
      <Route path="/tasks/:id" element = {<TaskItem/>} />
      <Route path="/users" element = {<UserItem/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
