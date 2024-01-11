import { z } from 'zod';
import { Types } from 'mongoose';

const createProjectValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    description: z.string().optional(),
    admin: z.instanceof(Types.ObjectId),
    startDate: z.date().optional(),
    endDate: z.date().optional(),
  }),
});

const updateProjectValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    admin: z.instanceof(Types.ObjectId).optional(),
    startDate: z.date().optional(),
    endDate: z.date().optional(),
  }),
});

export const ProjectValidation = {
  createProjectValidationSchema,
  updateProjectValidationSchema,
};
