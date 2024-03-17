import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { USERS } from "../fakeDB/users";
import Button from "./Button";

function UsersList(){
const [users, setUsers]=useState(USERS);
const [editingRatingUserId, setEditingRatingUserId] = useState<string|null>(null)
const [editingRatingValue, setEditingRatingValue]=useState<number>(0);

const navigate = useNavigate();

const handleChoseButton = (userId: string) => {
    navigate(`/users/${userId}`);
  };

  const handleDeleteButton = (userId: string) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  const handleEditingRating = (userId:string, newRating:number)=>{
    setUsers((prevUsers)=>prevUsers.map((user)=>
    user.id === userId ? {...user, rating:newRating}: user,
   console.log ('newRating',newRating,'userId', userId,)
   //console.log ()
    ))
    setEditingRatingUserId(null);
   setEditingRatingValue(0)

  }

return(
    <div>
        <h2>Список пользователей</h2>
        {users.map((user)=>(
            <div key = {user.id}>
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
            { editingRatingUserId ===user.id? (
                <div>
                    <input
                        type="text"
                        value={editingRatingValue}
                        onChange={(e) => {setEditingRatingValue(+e.target.value); console.log(e.target.value,e.target.value)}}
                        /* onKeyDown={(e) => {
                        if (e.key === "Enter") {
                        handleEditingRating(user.id, editingRatingValue);
                          
                      }
                }} */

              />
               <Button
                text="Сохранить"
                onClick={() => {
                  handleEditingRating(user.id, editingRatingValue);
                  console.log('editingRatingValue',editingRatingValue)
                }}
              />

                </div>
            ):(
                <div>
                    <Button
                        text="Редактировать рейтинг"
                        onClick={() => {
                            setEditingRatingUserId(user.id);
                            setEditingRatingValue(user.rating);
                            console.log('user.rating',user.rating)
                }}
              
                
              />

                </div>
            )}
                <hr />  
            </div>
        ))}
    </div>
)
}

export default UsersList