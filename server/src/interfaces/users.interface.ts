import { Document } from 'mongoose';
import { Request } from 'express';
export enum rolType {
  instructor = 'instructor',
  trainee = 'trainee',
}

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  role?: rolType[];
}

export interface CustomRequest extends Request {
  user?: IUser;
}
