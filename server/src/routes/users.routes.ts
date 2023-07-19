import { findAllUser, findUserById } from '../controllers/user.controller';
import { Router } from 'express';


const router = Router();


/* Get All Users */
router.get('/', findAllUser)

/* Get User by Id */
router.get('/:id', findUserById)


export default router;