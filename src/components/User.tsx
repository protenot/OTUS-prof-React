import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "./Button";
import { USERS } from "../fakeDB/users";
import UserEditor from "./UserEditor";
import { User } from "../models/user.model";

function UserItem() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<string | "">("");
  const [rating, setRating] = useState(0);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editedUser, setEditedUser] = useState<User | null>(null);
  
  const { id } = useParams();

  const openEditor = () => {
    console.log(rating);
    setIsEditorOpen(true);
  };
  const closeEditor = () => {
    setIsEditorOpen(false);
  };
  const saveUserChanges = (rating: number) => {
    if (editedUser) {
      const updatedUser = { ...editedUser, rating };
      setEditedUser(updatedUser);
    }
  };

  useEffect(() => {
    const user1 = USERS.find((user) => user.id === id);
    if (user1) {
      setName(user1.name);
      setEmail(user1.email);
      setRole(user1.role);
      setRating(user1.rating);
      setEditedUser(user1);
    }
  }, []);
  const navigate = useNavigate();
  const handleClickBack = () => {
  
      navigate("/users");
  };

  console.log("User is rendering...");

  return (
    <div>
      <Button
        text="Вернуться к выбору пользователя"
        onClick={handleClickBack}
      />

      <p>Имя : {editedUser ? name : ""}</p>
      <p>Почта : {editedUser ? email : ""}</p>
      <p>Роль : {editedUser ? role : ""}</p>
      {isEditorOpen ? (
        <UserEditor
          initialRating={editedUser ? editedUser.rating : 0}
          onSave={saveUserChanges}
          closeEditor={closeEditor}
        />
      ) : (
        <>
          <p>Рейтинг : {editedUser ? editedUser.rating : ""}</p>
          <Button
            text="Редактировать рейтинг пользователя"
            onClick={() => openEditor()}
          />
        </>
      )}
    </div>
  );
}
export default UserItem;
