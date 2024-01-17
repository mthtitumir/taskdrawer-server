import { TUser } from '../user/user.interface';
import { taskSearchableFields } from './task.constant';
import { TTask } from './task.interface';
import { Task } from './task.model';
import { findLastTaskId } from './task.util';

const createTaskIntoDB = async (payload: TTask) => {
  const lastTaskId = await findLastTaskId();
  if (lastTaskId) {
    payload.taskId = (Number(lastTaskId) + 1).toString();
  } else {
    payload.taskId = '1001';
  }
  const result = await Task.create(payload);
  return result;
};

const updateTaskIntoDB = async (id: string, payload: Partial<TTask>) => {
  const result = await Task.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const getUserSpecificTasks = async (
  user: Record<string, unknown>,
  query: Record<string, unknown>,
) => {
  // search by title/description || sort by dueDate || filter by status/priority
  const {
    searchTerm = '',
    page = 1,
    limit = 10,
    sortBy = 'dueDate',
    sortOrder = 'asc',
    status,
    priority,
  } = query;
  const filter: Record<string, unknown> = {assignee: user?._id};
  // console.log(user);
  
  const skip = (Number(page) - 1) * Number(limit);
  if (status) {
    filter.status = status;
  }
  if (priority) {
    filter.priority = priority;
  }
  // WE ARE DYNAMICALLY DOING IT USING LOOP
  const searchQuery = Task.find({
    $or: taskSearchableFields.map((field) => ({
      [field]: { $regex: searchTerm, $options: 'i' },
   })),
  })
  const result: TTask[] = await searchQuery.find(filter)
    .sort({ [sortBy as string]: sortOrder === 'asc' ? 1 : -1 })
    .skip(skip)
    .limit(parseInt(limit as string));
  return result;
};

export const TaskServices = {
  createTaskIntoDB,
  updateTaskIntoDB,
  getUserSpecificTasks,
};
