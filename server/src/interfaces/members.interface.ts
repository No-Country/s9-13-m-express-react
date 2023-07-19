import { Document, Schema } from 'mongoose';

export interface IMember extends Document {
  name: string;
  last_name: string;
  country: string;
  preferences: { description: string }[];
  avatar: object;
  skills: {
    title: string;
    category: string;
    description: string;
    level: 'basico' | 'intermedio' | 'avanzado';
  }[];
  user: Schema.Types.ObjectId;
}
