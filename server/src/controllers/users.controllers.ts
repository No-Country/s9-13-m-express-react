import { Request, Response } from 'express';
import { fetchLogin } from '../services/users.services';

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

export { loginUser };
