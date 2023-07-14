import User from "../models/users.models";

const getAllusers = async (page = 1, limit = 10) => {

    const users = await User.aggregate([
      {
        $lookup: {
          from: 'members',
          localField: '_id',
          foreignField: 'user',
          as: 'member'
        },
        
      },
      {
        $lookup: {
          from: "schedules",
          localField: "_id",
          foreignField: "user",
          as: "schedules",
        },
      },
      {
        $project: {
          password: 0,
          __v: 0,
        },
      },
      // { $unionWith: {coll:"Member", pipeline: [{$project:{state: 1, _id: 0}}]} },
    ])
    // .exec()
    .skip(page).limit(limit);
    // const users = await Member.find({}).populate({path:'user', select:'-password', match:{}, options:{ sort: {username:1} }})
    // .populate({path: 'Schedule', options:{strictPopulate:false}})
    // .skip(page).limit(limit);
    return users
  }
  

  export {getAllusers}