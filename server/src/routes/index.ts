import { Router, Response } from 'express';
import userRouter from './users.routes';
import recoveryPassword from './recoveryPassword.routes';

const router = Router();

router.get('/health', (_, res: Response) => {
  res.status(200).json({ message: 'Ok' });
});
router.use('/auth', userRouter);
router.use('/', recoveryPassword)

router.use('/auth', userRouter);
router.use('/', recoveryPassword);

export default router;
