import tasksReducer, {addTask, removeTask} from '../taskReducer';
import {ITask} from '../../models/task';

describe('tasksReducer', () => {
  const initialState = {
    tasks: [],
  };

  it('should handle initial state', () => {
    expect(tasksReducer(undefined, {type: ''})).toEqual(initialState);
  });

  it('should handle addTask', () => {
    const newTask: ITask = {
      id: 1,
      name: 'Test Task',
      description: 'This is a test task',
    };

    const nextState = tasksReducer(initialState, addTask(newTask));

    expect(nextState.tasks).toHaveLength(1);
    expect(nextState.tasks[0]).toEqual(newTask);
  });

  it('should handle removeTask', () => {
    const task1: ITask = {
      id: 1,
      name: 'Task One',
      description: 'This is task one',
    };
    const task2: ITask = {
      id: 2,
      name: 'Task Two',
      description: 'This is task two',
    };

    let stateWithTasks = tasksReducer(initialState, addTask(task1));
    stateWithTasks = tasksReducer(stateWithTasks, addTask(task2));

    const nextState = tasksReducer(stateWithTasks, removeTask(1));

    expect(nextState.tasks).toHaveLength(1);
    expect(nextState.tasks[0]).toEqual(task2);
  });

  it('should not remove a task if the id does not exist', () => {
    const task: ITask = {
      id: 1,
      name: 'Task One',
      description: 'This is task one',
    };

    let stateWithTask = tasksReducer(initialState, addTask(task));

    const nextState = tasksReducer(stateWithTask, removeTask(2));

    expect(nextState.tasks).toHaveLength(1);
    expect(nextState.tasks[0]).toEqual(task);
  });
});
