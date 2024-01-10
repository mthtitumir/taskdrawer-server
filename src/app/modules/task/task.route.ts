import express from 'express';
import { TaskControllers } from './task.controller';

const router = express.Router();

router.post('/', TaskControllers.createTask);

export const TaskRoutes = router;