import { Router, Response } from 'express';
import userRouter from './users.routes';
import recoveryPassword from './recoveryPassword.routes';
import memberRouter from './members.routes';

const router = Router();

router.get('/health', (_, res: Response) => {
  res.status(200).json({ message: 'Ok' });
});

router.use('/auth', userRouter);
router.use('/', recoveryPassword);
<<<<<<< HEAD
=======
router.use('/members', memberRouter);
>>>>>>> b7424209878d209b631dea44e59509e381d49c28

export default router;
