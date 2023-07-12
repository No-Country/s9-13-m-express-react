import { Request, Response } from 'express';
import { fetchCreateMembers, fetchGetMembers, fetchGetOneMember } from '../services/members.services';
import { updateService } from '../services/members.services';

const createMembers = async (req: any, res: Response) => {
  try {
    const { _id } = req.user;

    const memberData = req.body;
    const data = await fetchCreateMembers({ ...memberData, _id });
    res.status(201).json(data);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const getMembers = async (req: Request, res: Response) => {
  try {
    const data = await fetchGetMembers();
    if (data) res.status(200).json(data);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const getOneMember = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await fetchGetOneMember(id);
    if (data) res.status(200).json(data);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const updateController = async (req: any, res: Response) => {
  try {
    const data = req.body;
    const { _id } = req.user;

    await updateService(data, _id);

    res.status(200).json({ message: 'Ok' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export { createMembers, getOneMember, getMembers };
