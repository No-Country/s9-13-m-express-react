import { Document } from "mongoose";

export enum rolType {
  teacher = "teacher",
  member = "member"
}


export interface IUser extends Document {
  firsname: string,
  lastname: string,
  username: string,
  email: string,
  password: string
  repeatPasword: string
  role: rolType[]
}