import { Router, Response } from 'express';
import userRouter from './users.routes';
import { authenticate } from '../middlewares/auth/authenticate';
import { checkRole } from '../middlewares/auth/role';
import recoveryPassword from './recoveryPassword.routes';

const router = Router();

router.get('/health', authenticate, checkRole(['trainee']), (_, res: Response) => {
  res.status(200).json({ message: 'Ok' });
});

router.use('/auth', userRouter);
router.use('/', recoveryPassword);

export default router;
