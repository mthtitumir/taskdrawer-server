import express from 'express';
import { ProjectControllers } from './project.controller';

const router = express.Router();

router.post('/', ProjectControllers.createProject); //authenticate user
router.patch('/:projectId', ProjectControllers.updateProject); //authenticate user
router.get('/', ProjectControllers.updateProject); //authenticate user(must)

export const ProjectRoutes = router;