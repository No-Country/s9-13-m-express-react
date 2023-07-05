import { Router, Request, Response } from 'express';
import userRouter from './users.routes';

const router = Router();

router.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Ok' });
});
router.use('/auth', userRouter);

export default router;
