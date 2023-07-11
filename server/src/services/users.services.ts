import bcrypt from 'bcryptjs';
import User from '../models/users.models';
import { comparePassword } from '../utils/handdlePassword';
import { jwtUtils } from '../utils/jwtUtils';
import { TokenPayload } from '../interfaces/tokenPayload.interface';

const findUserByEmail = async (email: string) => {
  try {
    if (email) {
      return User.findOne({ email });
    }
  } catch (error) {
    console.error(`Error finding user by email: ${error}`);
    return null;
  }
};

const fetchLogin = async (password: string, email: string) => {
  const user = await findUserByEmail(email);
  if (!user) throw new Error('Conflict: User not found!');

  const comparedPassword = await comparePassword(user.password, password);
  if (!comparedPassword) throw new Error('Conflict: invalid email or password');

  const expiresIn = process.env.JWT_EXPIRES_IN;

  const payload: TokenPayload = {
    userId: user.id,
    role: user.role,
  };
  const token = jwtUtils.generateAccessToken(payload, expiresIn);

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
  try {
    const user = await findUserByEmail(email);
    console.log(user);

    if (user) {
      throw new Error("Conflict: Email already exists!");
    }

    const hash = await bcrypt.hash(password, 10);
    const data = await User.create({ username, email, password: hash });
    const response = {
      id: data.id,
      username: data.username,
      email: data.email,
    };
    return response;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};


export { fetchLogin, fetchSignUp };
