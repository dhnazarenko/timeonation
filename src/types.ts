import { ObjectId } from 'bson';

export type User = {
  _id?: ObjectId;
  email: string;
  password: string;
  username: string;
};
