import { Router } from 'express';
import {
  createMembers,
  getMembers,
  getOneMember,
  updateController,
} from '../controllers/members.controllers';
import { authenticate } from '../middlewares/auth/authenticate';

const router = Router();

router.get('/', getMembers);
router.get('/:id', getOneMember);
router.post('/create', authenticate, createMembers);
router.put('/update', authenticate, updateController);

export default router;
