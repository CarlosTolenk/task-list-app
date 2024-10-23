import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ITask} from '../models/task';

interface TasksState {
  tasks: ITask[];
}

const initialState: TasksState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
  },
});
export const selectTasks = (state: {tasks: TasksState}) => state.tasks.tasks;
export const {addTask, removeTask} = tasksSlice.actions;
export default tasksSlice.reducer;
