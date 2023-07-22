import User from '../models/users.models';

class SearchService {
  public async search(filters) {
    const defaultOption = { $match: { 'profile.skills.name': { $regex: filters.category, $options: 'i' } } };
    const withLevelOption = {
      $match: {
        'profile.skills.name': { $regex: filters.category, $options: 'i' },
        'profile.skills.level': { $eq: filters.level },
      },
    };

    const query = filters.level ? withLevelOption : defaultOption;
    try {
      const users = await User.aggregate([
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
        {
          $unwind: '$profile.skills',
        },
        query,
        {
          $group: {
            _id: '$_id',
            username: { $first: '$username' },
            email: { $first: '$email' },
            role: { $first: '$role' },
            profile: { $push: '$profile' },
          },
        },
      ]);
      return users;
    } catch (err: any) {
      console.log('Error in the Seach Service', err);
    }
  }
}

export const searchService = new SearchService();
