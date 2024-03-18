

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeUser, updateUserRating } from "../redux/userSlice"; // Импортируем действие для обновления рейтинга
import Button from "./Button";
import { RootState } from "../redux/store";
//import { USERS } from "../fakeDB/users";

function UsersList() {
  const users = useSelector((state:RootState) => state.users.users); // Получаем список пользователей из Redux
  const dispatch = useDispatch(); // Получаем диспетчер Redux
  const [editingRatingUserId, setEditingRatingUserId] = useState<string | null>(null);
  const [editingRatingValue, setEditingRatingValue] = useState<number>(0);
  const navigate = useNavigate();

  const handleChoseButton = (userId: string) => {
    navigate(`/users/${userId}`);
  };

  const handleDeleteButton = (userId: string) => {
    

    dispatch(removeUser(userId));
  };

  const handleEditingRating = (userId: string, newRating: number) => {
    dispatch(updateUserRating({ userId, newRating })); // Вызываем действие для обновления рейтинга пользователя
    setEditingRatingUserId(null);
    setEditingRatingValue(0);
  };

  return (
    <div>
      <h2>Список пользователей</h2>
      {(users).map((user) => (
        <div key={user.id}>
          <p>ID :{user.id}</p>
          <p>Имя :{user.name}</p>
          <p>Почта :{user.email}</p>
          <p>Роль : {user.role}</p>
          <p>Рейтинг : {user.rating}</p>
          <Button
            text="Выбрать пользователя"
            onClick={() => handleChoseButton(user.id)}
          />
          <Button
            text="Удалить пользователя"
            onClick={() => handleDeleteButton(user.id)}
          />
          {editingRatingUserId === user.id ? (
            <div>
              <input
                type="text"
                value={editingRatingValue}
                onChange={(e) => {
                  setEditingRatingValue(+e.target.value);
                }}
              />
              <Button
                text="Сохранить"
                onClick={() => {
                  handleEditingRating(user.id, editingRatingValue);
                }}
              />
            </div>
          ) : (
            <div>
              <Button
                text="Редактировать рейтинг"
                onClick={() => {
                  setEditingRatingUserId(user.id);
                  setEditingRatingValue(user.rating);
                }}
              />
            </div>
          )}
          <hr />
        </div>
      ))}
    </div>
  );
}

export default UsersList;
