import express from 'express';
import { TaskControllers } from './task.controller';
import validateRequest from '../../middlewares/validateRequest';
import { TaskValidation } from './task.validation';

const router = express.Router();

router.post(
    '/', 
    validateRequest(TaskValidation.createTaskSchema),
    TaskControllers.createTask
);

export const TaskRoutes = router;