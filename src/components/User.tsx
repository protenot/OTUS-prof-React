import React, {useState, useEffect} from "react";
import Button from './Button';
import {USERS} from '../fakeDB/users';
import UserEditor from './UserEditor'

function User() {
const [name, setName]=useState('');
const [email, setEmail]=useState('');
const [role, setRole]=useState('');
const [rating, setRating]=useState(0);
const [users, setUsers] = useState(USERS);  
const [editedUser, setEditedUser]= useState(null);
const [isEditorOpen, setIsEditorOpen] = useState(false)    

const openEditor = ()=>{
    setIsEditorOpen(true);
}
const closeEditor = ()=>{
    setIsEditorOpen(false)
}
useEffect(()=>{
    const user1 = USERS.find(user=>user.id ==='1');
    if(user1){
        setName(user1.name);
        setEmail(user1.email);
        setRole(user1.role);
        setRating(user1.rating);
        setEditedUser(user1)
    }

},[])

const handleInputRatingChange = (userId, field, value)=>{
    const userIndex = users.findIndex(
        user=>user.id===userId
    )
    if(userIndex !==-1){
        const updatedUser = {...users[userIndex], [field]:value}
        const updatedUsers = [...users.slice(0, userIndex),updatedUser, ...users.slice(userIndex+1)]
        setUsers(updatedUsers)
    }

    
    }

    const saveUserChanges = (rating)=>{
        if(editedUser){
            const updatedUser = {...editedUser, rating}
            setEditedUser(updatedUser)
        }
}


return(
    <div>
        <Button text = "Вернуться к выбору пользователя"  onClick={() => openEditor()}/>
        
        <p>Имя : {editedUser? name:''}</p>
        <p>Почта : {editedUser? email:''}</p>
        <p>Роль : {editedUser? role:''}</p>
        {isEditorOpen? (
            <UserEditor
            user = {editedUser}
            onInputChange = {handleInputRatingChange}
            initialRating = {editedUser?rating:''}
            onSave={saveUserChanges}
            closeEditor={closeEditor}
            />
        ):<p>Рейтинг : {editedUser? rating:''}</p>
        }
        
    </div>
)
}
export default User