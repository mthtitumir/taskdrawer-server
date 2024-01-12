import express from 'express';
import { TaskControllers } from './task.controller';
import validateRequest from '../../middlewares/validateRequest';
import { TaskValidation } from './task.validation';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.post(
    '/', 
    auth(USER_ROLE.user),
    validateRequest(TaskValidation.createTaskSchema),
    TaskControllers.createTask
);

export const TaskRoutes = router;