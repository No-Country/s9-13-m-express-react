import { Document, Schema } from 'mongoose';

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
    level: 'basico' | 'intermedio' | 'avanzado';
  }[];
  user: Schema.Types.ObjectId;
}
