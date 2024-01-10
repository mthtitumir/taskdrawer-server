import express from 'express';
import { ProjectControllers } from './project.controller';

const router = express.Router();

router.post('/', ProjectControllers.createProject);
router.patch('/:projectId', ProjectControllers.updateProject);

export const ProjectRoutes = router;