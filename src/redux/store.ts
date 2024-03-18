import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./userSlice";
import tasksReducer from "./taskSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    tasks: tasksReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
