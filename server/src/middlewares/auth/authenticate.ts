import { Request, Response, NextFunction } from 'express';
import { jwtUtils } from './../../utils/jwtUtils';
import User from 'models/users.models';
import { IUser } from 'interfaces/users.interface';


declare module 'express' {
  interface Request {
    user?: IUser;
  }
}


export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  try {
    const decoded = jwtUtils.verifyToken(token);

    const { userId } = decoded;

    const user = await User.findById(userId).exec()
    
    if (user) { req.user = user };

    next();
  } catch (error: any) {
    return res.status(401).json({ message: 'Invalid authentication token or unauthorized user', error });
  }
};
