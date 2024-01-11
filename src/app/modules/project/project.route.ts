import express from 'express';
import { ProjectControllers } from './project.controller';
import validateRequest from '../../middlewares/validateRequest';
import { ProjectValidation } from './project.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(ProjectValidation.createProjectValidationSchema),
  ProjectControllers.createProject,
); //authenticate user 

router.patch(
  '/:projectId',
  validateRequest(ProjectValidation.updateProjectValidationSchema),
  ProjectControllers.updateProject,
); //authenticate user

router.get('/', ProjectControllers.updateProject); //authenticate user(must)

router.get('/:userId', ProjectControllers.getUserAllProject); // this id must be from the auth (auth.user)

export const ProjectRoutes = router;
