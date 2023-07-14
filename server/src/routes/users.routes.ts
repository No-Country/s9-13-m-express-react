import { findAllUser } from '../controllers/user.controller';
import { Router } from 'express';


const router = Router();


/* Get All Users */
router.get('/', findAllUser)

export default router;