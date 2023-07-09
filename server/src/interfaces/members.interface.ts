import { Document, Schema } from 'mongoose';
import { IUser } from '../interfaces/users.interface';

export interface IMember extends Document {
  name: string;
  last_name: string;
  country: string;
  preferences: { descripcion: string }[];
  avatar: string;
  skills: {
    title: string;
    category: string;
    description: string;
    level: 'basic' | 'intermedio' | 'avanzado';
  }[];
  user: Schema.Types.ObjectId | IUser;
}
