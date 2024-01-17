import express from 'express';
import { ProjectControllers } from './project.controller';
import validateRequest from '../../middlewares/validateRequest';
import { ProjectValidation } from './project.validation';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.post(
  '/',
  auth(USER_ROLE.user),
  validateRequest(ProjectValidation.createProjectValidationSchema),
  ProjectControllers.createProject,
); //authenticate user

router.patch(
  '/:projectId',
  auth(USER_ROLE.user),
  validateRequest(ProjectValidation.updateProjectValidationSchema),
  ProjectControllers.updateProject,
); //authenticate user

// router.get('/', ProjectControllers.updateProject); //authenticate user(must)

router.get(
  '/:userId',
  auth(USER_ROLE.user),
  ProjectControllers.getUserAllProject,
); // this id must be from the auth (auth.user)

export const ProjectRoutes = router;
