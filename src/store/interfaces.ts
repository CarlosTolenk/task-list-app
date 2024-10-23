import {IAuth} from './models/auth';
import {ITask} from './models/task';

export interface IGlobalStore {
  auth: IAuth;
  tasks: ITask[];
}
