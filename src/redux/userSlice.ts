import { createSlice } from "@reduxjs/toolkit";
import { User } from "../models/user.model";
import { USERS } from "../fakeDB/users";

type initialStateProps={
    users:User[];
    editingUserId:string|null
}
const initialState:initialStateProps = {
    users:USERS,
    editingUserId:null,
}

const usersSlice = createSlice({
    name:"users",
    initialState,
    reducers:{
        
        setEditingUserId(state, action){
            state.editingUserId = action.payload;
        },
        saveUserRating(state,action){
            const {userId, newRating} = action.payload;
            const user = state.users.find(user => user.id === userId);
            if (user) {
                user.rating = newRating;
              }
        
        },
        updateUserRating(state, action) {
            const { userId, newRating } = action.payload;
            const userToUpdate = state.users.find(user => user.id === userId);
            if (userToUpdate) {
              userToUpdate.rating = newRating;
            }
          },
          removeUser(state, action) {
            const userIdToRemove = action.payload;
            state.users = state.users.filter(user => user.id !== userIdToRemove);
          }

    }
})
export const { setEditingUserId, saveUserRating, updateUserRating, removeUser} = usersSlice.actions;
export default usersSlice.reducer;