import { Router } from 'express';
import {
  createMembers,
  getMembers,
  getOneMember,
  updateController,
} from '../controllers/members.controllers';
import { authenticate } from '../middlewares/auth/authenticate';
import { validationMember, validationCreateMember } from '../middlewares/validators/members';

const router = Router();

router.get('/', getMembers);
router.get('/:id', getOneMember);
router.post('/create', authenticate, validationMember, validationCreateMember, createMembers);
router.put('/update', authenticate, validationMember, updateController);

export default router;
