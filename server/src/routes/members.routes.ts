import { Router } from 'express';

import { updateController } from '../controllers/members.controllers';

const router = Router();

router.post('/update', updateController);

export default router;
