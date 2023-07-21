import { Request, Response } from 'express';
import { searchService } from '../services/search.services';

class SearchController {
  public async search(req: Request, res: Response) {
    try {
      const category = req.query.category;
      console.log("categoria: ", category)
      const search = await searchService.search(category);
      return res.status(200).json({
        message: 'OK',
        data: search,
      });
    } catch (err: any) {
      res.status(500).json({ message: 'Server error', error: err });
    }
  }
}

export const searchController = new SearchController();
