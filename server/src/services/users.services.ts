import bcrypt from 'bcryptjs';
import User from '../models/users.models';
import { comparePassword } from '../utils/handdlePassword';
import { jwtUtils } from '../utils/jwtUtils';
import { TokenPayload } from '../interfaces/TokenPayload';

const findUserByEmail = async (email: string) => {
  try {
    if (email) return User.findOne({ email });
  } catch (error) {
    throw new Error(`User not found! - ${error}`);
  }
};

const fetchLogin = async (password: string, email: string) => {
  const user = await findUserByEmail(email);
  if (!user) throw new Error('User not found!');
  const comparedPassword = await comparePassword(user.password, password);
  if (!comparedPassword) throw new Error('invalid email or password');

  const payload: TokenPayload = {
    userId: user.id,
    role: user.role,
  };
  const token = jwtUtils.generateAccessToken(payload);

  const response = {
    user: {
      id: user.id,
      email: user.email,
      username: user.username,
    },
    token,
  };
  return response;
};

const fetchSignUp = async (username: string, email: string, password: string) => {
  const user = await findUserByEmail(email);
  if (user) throw new Error('Email already exists!');
  const hash = await bcrypt.hash(password, 10);
  const data = await User.create({ username, email, password: hash });
  // NOTA: devolvemos solo estos campos?
  const response = {
    id: data.id,
    email: data.email,
    username: data.username,
  };
  return response;
};

export { fetchLogin, fetchSignUp };
