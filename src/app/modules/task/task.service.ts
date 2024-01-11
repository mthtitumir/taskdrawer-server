import { TTask } from './task.interface';
import { Task } from './task.model';
import { findLastTaskId } from './task.util';

const createTaskIntoDB = async (payload: TTask) => {
  const lastTaskId = await findLastTaskId();
  if(lastTaskId){
    payload.taskId = (Number(lastTaskId) + 1).toString() ;
  } else {
    payload.taskId = "1001";
  }
  const result = await Task.create(payload);
  return result;
};

export const TaskServices = {
  createTaskIntoDB,
};
