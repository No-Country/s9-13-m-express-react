import { Request, Response } from 'express';
import { searchService } from '../services/search.services';

class SearchController {
  public async search(req: Request, res: Response) {
    try {
      const filters = req.query;

      const users = await searchService.search(filters);
      return res.status(200).json({
        message: 'OK',
        data: users,
      });
    } catch (err: any) {
      res.status(500).json({ message: 'Server error', error: err });
    }
  }
}

export const searchController = new SearchController();
