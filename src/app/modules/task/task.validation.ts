import { z } from 'zod';
import { Types } from 'mongoose';
import { priority, status, type } from './task.constant';

const createTaskSchema = z.object({
  body: z.object({
    taskId: z.string(),
    title: z.string(),
    description: z.string().optional(),
    dueDate: z.date(),
    status: z.array(z.enum([...status] as [string, ...string[]])),
    type: z.array(z.enum([...type] as [string, ...string[]])),
    priority: z.array(z.enum([...priority] as [string, ...string[]])),
    assignee: z.instanceof(Types.ObjectId),
    project: z.instanceof(Types.ObjectId).optional(),
  }),
});

const updateTaskSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    dueDate: z.date().optional(),
    status: z.array(z.enum([...status] as [string, ...string[]])).optional(),
    type: z.array(z.enum([...type] as [string, ...string[]])).optional(),
    priority: z.array(z.enum([...priority] as [string, ...string[]])).optional(),
    assignee: z.instanceof(Types.ObjectId).optional(),
    project: z.instanceof(Types.ObjectId).optional(),
  }),
});

export const TaskValidation = {
  createTaskSchema,
  updateTaskSchema
};
