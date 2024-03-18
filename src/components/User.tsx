import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {setEditingUserId, saveUserRating} from '../redux/userSlice'
import Button from "./Button";
//import { USERS } from "../fakeDB/users";
import UserEditor from "./UserEditor";
import { User } from "../models/user.model";



function UserItem() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
 // const editingUserId = useSelector((state) => state.users.editingUserId);
  const users = useSelector((state) => state.users.users);
  const editedUser = users.find((user:User) => user.id === id);
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  useEffect(() => {
    dispatch(setEditingUserId(id));
  }, [dispatch, id]);

  const handleClickBack = () => {
    navigate("/users");
  };

  const handleSaveRating = (newRating:number) => {
    dispatch(saveUserRating({ userId: id, newRating }));
    console.log('handleSaveRating', newRating )
    setIsEditorOpen(false); 
  };

  return (
    <div>
      <Button text="Вернуться к выбору пользователя" onClick={handleClickBack} />
      {editedUser && (
        <>
          <p>Имя : {editedUser.name}</p>
          <p>Почта : {editedUser.email}</p>
          <p>Роль : {editedUser.role}</p>
          <p>Рейтинг : {editedUser.rating}</p>
          {isEditorOpen ? (
            <UserEditor
              initialRating={editedUser.rating}
              onSave={handleSaveRating}
              closeEditor={() => setIsEditorOpen(false)} // Закрываем редактор по клику на кнопку "Отмена"
            />
          ) : (
            <Button
              text="Редактировать рейтинг пользователя"
              onClick={() => {
                setIsEditorOpen(true); // Открываем редактор при нажатии на кнопку
                dispatch(setEditingUserId(id));
              }}
            />
          )}
        </>
       )} 
    </div>
  );
}

export default UserItem;

