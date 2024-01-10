import { Types } from "mongoose";

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
