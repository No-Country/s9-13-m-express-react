import { Request, Response } from 'express';
import { getAllusers } from "../services/user.services"



const findAllUser = async (req: Request, res: Response) => {
    try{
      const page = parseInt(req.query.page as string)
      const limit = parseInt(req.query.limit as string)
      const users =  await getAllusers(page, limit)
      return res.status(201).json({msg:"Ok", data: users})
    }catch(error: any){
      return res.status(400).json({ error: error.message})
    }
  }



export { findAllUser };