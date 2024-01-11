/* eslint-disable no-unused-vars */
import { Model, Types } from "mongoose";

export type TUser = {
  username: string;
  email: string;
  password: string;
  name: string;
  profilePicture?: string;
  bio?: string;
  timeZone?: string;
  projects?: [Types.ObjectId];
};

export interface UserModel extends Model<TUser> {
  //instance methods for checking if the user exist
  isUserExists(field: Record<string, unknown>): Promise<TUser>;
  //instance methods for checking if passwords are matched
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}