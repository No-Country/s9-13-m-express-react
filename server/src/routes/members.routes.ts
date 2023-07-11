import { Router } from 'express';

import { updateMember } from '../controllers/members.controllers';

const router = Router();

router.post('/update', updateMember);

export default router;
