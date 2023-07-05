import { Request, Response } from 'express';
import { fetchLogin, fetchSignUp } from 'services/users.services';

const loginUser = async (req: Request, resp: Response) => {
  try {
    const { email, password } = req.body;
    const data = await fetchLogin(password, email);
    resp.status(201).json({ msg: 'User login succesfull', data });
  } catch (error) {
    // Crear validacion personalizada
    throw new Error('Error while login user');
  }
};

const signupUser = async (req: Request, resp: Response) => {
  try {
    const { username, email, password }  = req.body;
    const data = await fetchSignUp(username, email, password);
    resp.status(201).json({ msg: 'User sign-up succesfull', data });
  } catch (error) {
    throw new Error('Error while sign-up user');
  }
};

export { loginUser, signupUser };
