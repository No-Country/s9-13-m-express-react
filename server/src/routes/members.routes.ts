import { Router } from "express";
import { createMembers, getMembers,getOneMember } from '../controllers/members.controllers'

const router = Router();

/*ROUTES*/

/*create*/
router.post("/create", createMembers)

/*get all members*/
router.get("/", getMembers)

/*get one members*/
router.get("/:id", getOneMember)



export default router;