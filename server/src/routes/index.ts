import { Router, Response } from 'express';
import userRouter from './users.routes';

import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from '../utils/swaggerSpec';

const router = Router();

router.get('/health', (_, res: Response) => {
  res.status(200).json({ message: 'Ok' });
});

router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

router.use('/auth', userRouter);

export default router;
