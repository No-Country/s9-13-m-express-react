import { Response } from 'express';

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
