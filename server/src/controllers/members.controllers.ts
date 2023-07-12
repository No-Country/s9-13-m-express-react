import { Request, Response } from 'express';
import { fetchCreateMembers, fetchGetMembers, fetchGetOneMember } from '../services/members.services';
import { IMember } from 'interfaces/members.interface';

const createMembers = async (req: Request, res: Response) => {
  try {
    // Para inpactar en al base de dato que necesito el objeto entero o el id de mongodb?
    // los del front que manden el id o lo obtenermos de la verificacion del token?
    // const { user } = req.body
    // los del fronten necesitan el id xq sino lo obtenemos del token

    const { ...memberData } = req.body;
    const data = await fetchCreateMembers({ ...memberData });
    res.status(201).json(data);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const getMembers = async (req: Request, res: Response) => {
  try {
    const data = await fetchGetMembers();
    if (data) {
      res.status(200).json(data);
    }
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// Cuando reciben los del front el id de member?
// le tenemos que madnar todo?
const getOneMember = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await fetchGetOneMember(id);
    if (data) res.status(200).json(data);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

import { updateService } from '../services/members.services';

export const updateController = async (req: any, res: Response) => {
  try {
    // name, last_name, country, preferences, avatar, skills, email, password
    const data = req.body;
    const { id } = req.user;

    await updateService(data, id);

    res.status(200).json({ message: 'Ok' });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export { createMembers, getOneMember, getMembers };
