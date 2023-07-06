import { Router, Response } from 'express';
import userRouter from './users.routes';
import { authenticate } from '../middlewares/auth/authenticate';
import { checkRole } from '../middlewares/auth/role';
import recoveryPassword from './recoveryPassword.routes';

import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from '../utils/swaggerSpec';

const router = Router();

router.get('/health', authenticate, checkRole(['trainee']), (_, res: Response) => {
  res.status(200).json({ message: 'Ok' });
});

router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

router.use('/auth', userRouter);
router.use('/', recoveryPassword);

export default router;
