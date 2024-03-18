import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TASKS } from "../fakeDB/tasks";
import { Task } from "../models/task.model";
import { RootState } from "../redux/store";

type initialStateTaskProps = {
  tasks: Task[];
};

const initialState: initialStateTaskProps = {
  tasks: TASKS,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    removeTask(state, action) {
      const taskIdToRemove = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== taskIdToRemove);
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const { id } = action.payload;
      const existingTask = state.tasks.find((task) => task.id === id);
      if (existingTask) {
        Object.assign(existingTask, action.payload);
      }
    },
    saveDescription(
      state,
      action: PayloadAction<{ taskId: string; description: string }>,
    ) {
      const { taskId, description } = action.payload;
      const existingTask = state.tasks.find((task) => task.id === taskId);
      if (existingTask) {
        existingTask.description = description;
      }
    },

    saveSolution(
      state,
      action: PayloadAction<{ taskId: string; solution: string }>,
    ) {
      const { taskId, solution } = action.payload;
      const existingTask = state.tasks.find((task) => task.id === taskId);
      if (existingTask) {
        existingTask.solution = solution;
      }
    },

    saveComplexity(
      state,
      action: PayloadAction<{ taskId: string; complexity: number }>,
    ) {
      const { taskId, complexity } = action.payload;
      const existingTask = state.tasks.find((task) => task.id === taskId);
      if (existingTask) {
        existingTask.complexity = complexity;
      }
    },
    saveLanguage(
      state,
      action: PayloadAction<{ taskId: string; language: string }>,
    ) {
      const { taskId, language } = action.payload;
      const existingTask = state.tasks.find((task) => task.id === taskId);
      if (existingTask) {
        existingTask.language = language;
      }
    },
    saveTag(state, action: PayloadAction<{ taskId: string; tag: string }>) {
      const { taskId, tag } = action.payload;
      const existingTask = state.tasks.find((task) => task.id === taskId);
      if (existingTask) {
        existingTask.tag = tag;
      }
    },
    updateTag(state, action: PayloadAction<{ taskId: string; tag: string }>) {
      const { taskId, tag } = action.payload;
      const tagToUpdate = state.tasks.find((task) => task.id === taskId);
      if (tagToUpdate) {
        tagToUpdate.tag = tag;
      }
    },
  },
});
export const {
  removeTask,
  updateTask,
  saveDescription,
  saveSolution,
  saveComplexity,
  saveLanguage,
  saveTag,
  updateTag,
} = tasksSlice.actions;
export default tasksSlice.reducer;
export const selectTasks = (state: RootState) => state.tasks.tasks;
export const selectTaskById = (state: RootState, taskId: string) => {
  return state.tasks.tasks.find((task) => task.id === taskId);
};
