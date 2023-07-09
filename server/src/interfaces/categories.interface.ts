import { Document } from 'mongoose';

export interface ICategory extends Document {
  description: string;
}
