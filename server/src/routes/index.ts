import { Router, Response } from 'express';
import userRouter from './auth.routes';
import recoveryPassword from './recoveryPassword.routes';
import UserRouter from './users.routes'
import memberRouter from './members.routes';
import categoriesRouter from './categories.routes';
import scheduleRouter from './schedule.routes';

const router = Router();

router.get('/health', (_, res: Response) => {
  res.status(200).json({ message: 'Ok' });
});

router.use('/auth', userRouter);
router.use('/', recoveryPassword);
router.use('/members', memberRouter);
router.use('/categories', categoriesRouter);
router.use('/schedule', scheduleRouter);
router.use('/users', UserRouter);

export default router;
