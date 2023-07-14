import { Router, Response } from 'express';
import authRouter from './auth.routes';
import recoveryPassword from './recoveryPassword.routes';
import userRouter from './users.routes'
import memberRouter from './members.routes';
import categoriesRouter from './categories.routes';
import scheduleRouter from './schedule.routes';

const router = Router();

router.get('/health', (_, res: Response) => {
  res.status(200).json({ message: 'Ok' });
});

router.use('/auth', authRouter);
router.use('/', recoveryPassword);
router.use('/members', memberRouter);
router.use('/categories', categoriesRouter);
router.use('/schedule', scheduleRouter);
router.use('/users', userRouter);

export default router;
