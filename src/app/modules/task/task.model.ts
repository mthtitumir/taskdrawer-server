import { Schema, model } from 'mongoose';
import { TTask } from './task.interface';

const taskSchema = new Schema<TTask>({
  taskId: {
    type: String,
    required: [true, 'Task id is required!'],
    unique: true,
  },
  title: {
    type: String,
    required: [true, 'Title is required!'],
  },
  description: {
    type: String,
  },
  dueDate: {
    type: Date,
    required: [true, 'Due date is required!'],
  },
  status: {
    type: String,
    enum: {
      values: ['in-progress', 'cancelled', 'completed'],
      message: '{VALUE} is not a valid status!',
    },
    required: [true, 'Status is required!'],
  },
  type: {
    type: String,
    enum: {
      values: ['personal', 'team'],
      message: '{VALUE} is not a valid task type!',
    },
    default: 'personal',
  },
  priority: {
    type: String,
    enum: {
      values: ['low', 'medium', 'high'],
      message: '{VALUE} is not a valid priority!',
    },
    required: true,
  },
  assignee: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Assignee is required!'],
  },
  project: {
    type: Schema.Types.ObjectId,
    ref: 'Project',
  },
});

export const Task = model<TTask>('Task', taskSchema);
