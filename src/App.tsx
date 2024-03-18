//import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Home from "./components/Home";
import TaskList from "./components/TaskList";
import UserItem from "./components/User";
import "./App.css";

import TaskItem from "./components/Task";
import UsersList from "./components/UserList";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div>
          <nav>
            <ul className="navigation">
              <li>
                <Link to="/">Домашняя</Link>
              </li>
              <li>
                <Link to="/tasks">Задачи</Link>
              </li>
              <li>
                <Link to="/users">Пользователи</Link>
              </li>
            </ul>
          </nav>
          <hr />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<TaskList />} />
            <Route path="/tasks/:id" element={<TaskItem />} />
            <Route path="/users" element={<UsersList />} />
            <Route path="/users/:id" element={<UserItem />} />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
