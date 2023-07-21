import User from '../models/users.models';
import Member from '../models/members.models';

class SearchService {
  public async search(category) {
    try {
      const search = await User.aggregate(
        [
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
          { $match: { "profile.preferences.name": category } }
        ]
      );
      return search;
    } catch (err: any) {
      console.log('Error in the Meetings Service', err);
    }
  }
}

export const searchService = new SearchService();
