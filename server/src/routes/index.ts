import { Router, Request, Response } from 'express';
import userRouter from './users.routes';
import { authenticate } from '../middlewares/auth/authenticate';
import { checkRole } from '../middlewares/auth/role';
const router = Router();

router.get('/health', authenticate, checkRole(['trainee']), (req: Request, res: Response) => {
  res.status(200).json({ message: 'Ok' });
});
router.use('/auth', userRouter);

export default router;
