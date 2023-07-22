import User from '../models/users.models';

class SearchService {
  public async search(filters) {
    try {
      const search = await User.aggregate([
        {
          $lookup: {
            from: 'members',
            localField: '_id',
            foreignField: 'user',
            as: 'profile',
          },
        },
        {
          $unwind: {
            path: '$profile',
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $project: {
            password: 0,
            __v: 0,
            token: 0,
          },
        },
        { $match: { 'profile.skills.name': { $regex: filters.category, $options: 'i' } } },
      ]);
      return search;
    } catch (err: any) {
      console.log('Error in the Seach Service', err);
    }
  }
}

export const searchService = new SearchService();
