import { Schema, model } from 'mongoose';
import { IMember } from '../interfaces/members.interface';

const memberSchema = new Schema<IMember>({
  name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  preferences: [
    {
      description: {
        type: String,
        required: true,
      },
    },
  ],
  avatar: {
    public_id: String,
    secure_url: String
  },
  skills: [
    {
      title: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      level: {
        type: String,
        enum: ['basic', 'intermedio', 'avanzado'],
        required: true,
      },
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

memberSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Member = model<IMember>('Member', memberSchema);

export default Member;
