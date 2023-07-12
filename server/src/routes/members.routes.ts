import { Router } from 'express';
import {
  createMembers,
  getMembers,
  getOneMember,
  updateController,
} from '../controllers/members.controllers';

const router = Router();

router.get('/', getMembers);
router.get('/:id', getOneMember);
router.post('/create', createMembers);
router.post('/update', updateController);

export default router;
