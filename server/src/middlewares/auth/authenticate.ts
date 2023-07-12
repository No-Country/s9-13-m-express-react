import { Response, NextFunction } from 'express';
import { jwtUtils } from './../../utils/jwtUtils';
import User from '../../models/users.models';
import { CustomRequest, IUser } from '../../interfaces/users.interface';

export const authenticate = async (req: CustomRequest, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  try {
    const decoded = jwtUtils.verifyToken(token);

    const user = await User.findById(decoded.userId);
    req.user = user as IUser;

    next();
  } catch (error: any) {
    return res.status(401).json({ message: 'Invalid authentication token or unauthorized user', error });
  }
};
