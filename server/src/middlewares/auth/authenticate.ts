import { Request, Response, NextFunction } from 'express';
import { jwtUtils } from './../../utils/jwtUtils';

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Token not provided'});
  }

  try {
    const decoded = jwtUtils.verifyToken(token);
    next()
  } catch (error: any) {
    return res.status(401).json({ message: "Invalid authentication token or unauthorized user", error });
  }
}