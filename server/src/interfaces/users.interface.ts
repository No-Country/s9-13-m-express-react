import { Document } from 'mongoose';

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
