import { Types } from "mongoose";

export type TTask = {
    taskId: string;
    title: string;
    description: string;
    dueDate: Date;
    status: 'in-progress' | 'canceled' | 'completed';
    type: 'personal' | 'team';
    priority: 'low' | 'medium' | 'high';
    assignee: Types.ObjectId;
    project: Types.ObjectId;
}