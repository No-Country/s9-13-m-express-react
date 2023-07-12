import { Router, Response } from 'express';
import userRouter from './users.routes';
import recoveryPassword from './recoveryPassword.routes';
import memberRouter from './members.routes';
import categoriesRouter from './categories.routes';

const router = Router();

router.get('/health', (_, res: Response) => {
  res.status(200).json({ message: 'Ok' });
});

router.use('/auth', userRouter);
router.use('/', recoveryPassword);
router.use('/members', memberRouter);
router.use('/categories', categoriesRouter);

export default router;
