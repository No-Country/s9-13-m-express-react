import Member from '../models/members.models';

export const updateService = async (data: any, id: string) => {
  const res = Member.findOneAndUpdate({ id: id }, { ...data });

  if (!res) throw new Error('Member not found');

  return res;
};
