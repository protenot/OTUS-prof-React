//import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import TaskList from "./components/TaskList";
import UserItem from "./components/User";
import "./App.css";
import User from "./components/User";
import Task from './components/Task';

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
            <Link to ='/users'>Пользователи</Link>
          </li>
        </ul>
      </nav>
      <Routes>
      <Route path="/" Component = {User} />
      <Route path="/tasks" Component = {TaskList} />
      <Route path="/tasks/:id" Component = {Task} />
      <Route path="/users" Component = {UserItem} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
