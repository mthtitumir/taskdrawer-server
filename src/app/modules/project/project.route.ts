import express from 'express';
import { ProjectControllers } from './project.controller';

const router = express.Router();

router.post('/', ProjectControllers.createProject); //authenticate user
router.patch('/:projectId', ProjectControllers.updateProject); //authenticate user
router.get('/', ProjectControllers.updateProject); //authenticate user(must)
router.get('/:userId', ProjectControllers.getUserAllProject); // this id must be from the auth (auth.user)
export const ProjectRoutes = router;