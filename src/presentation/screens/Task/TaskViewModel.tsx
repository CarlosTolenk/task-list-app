import {useDispatch, useSelector} from 'react-redux';
import {addTask, selectTasks} from '../../../store/states/taskReducer';
import {ITask} from '../../../store/models/task';

interface ITaskViewModel {
  tasks: ITask[];
  addTask: (task: ITask) => void;
  handleRemoveTask(id: number): void;
}

export const useTaskViewModel = (): ITaskViewModel => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);

  const addTaskHandler = (task: ITask) => {
    console.log('Se tiene que crear');
    dispatch(addTask(task));
  };

  const handleRemoveTask = (id: number) => {
    console.log(id);
  };

  return {tasks, addTask: addTaskHandler, handleRemoveTask};
};
