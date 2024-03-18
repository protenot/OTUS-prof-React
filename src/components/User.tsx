import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { saveUserRating } from "../redux/userSlice";
import Button from "./Button";
import UserEditor from "./UserEditor";
import { User } from "../models/user.model";
import { RootState } from "../redux/store";

function UserItem() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users.users);
  const editedUser = users.find((user: User) => user.id === id);
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  const handleClickBack = () => {
    navigate("/users");
  };

  const handleSaveRating = (newRating: number) => {
    dispatch(saveUserRating({ userId: id, newRating }));
    console.log("handleSaveRating", newRating);
    setIsEditorOpen(false);
  };

  return (
    <div>
      <Button
        text="Вернуться к выбору пользователя"
        onClick={handleClickBack}
      />
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
              closeEditor={() => setIsEditorOpen(false)}
            />
          ) : (
            <Button
              text="Редактировать рейтинг пользователя"
              onClick={() => {
                setIsEditorOpen(true);
                
              }}
            />
          )}
        </>
      )}
    </div>
  );
}

export default UserItem;
