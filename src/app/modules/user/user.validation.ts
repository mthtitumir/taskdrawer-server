import { z } from 'zod';
import { Types } from 'mongoose';

const createUserValidationSchema = z.object({
  body: z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string(),
    name: z.string(),
    profilePicture: z.string().optional(),
    bio: z.string().optional(),
    timeZone: z.string().optional(),
    projects: z.array(z.instanceof(Types.ObjectId)).optional(),
  })
});
const updateUserValidationSchema = z.object({
  body: z.object({
    username: z.string().optional(),
    email: z.string().email().optional(),
    name: z.string().optional(),
    profilePicture: z.string().optional(),
    bio: z.string().optional(),
    timeZone: z.string().optional(),
    projects: z.array(z.instanceof(Types.ObjectId)).optional(),
  })
});

export const UserValidation = {
  createUserValidationSchema,
  updateUserValidationSchema
};