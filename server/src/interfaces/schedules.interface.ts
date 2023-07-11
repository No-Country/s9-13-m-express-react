import { Document, Schema } from 'mongoose';
import { IUser } from '../interfaces/users.interface';

export interface ISchedule extends Document {
  day_of_week: string;
  start_time: Date;
  end_time: Date;
  user: Schema.Types.ObjectId | IUser;
}
