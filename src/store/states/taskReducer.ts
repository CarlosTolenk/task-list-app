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
  },
});
export const selectTasks = (state: {tasks: TasksState}) => state.tasks.tasks;
export const {addTask} = tasksSlice.actions;
export default tasksSlice.reducer;
