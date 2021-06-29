import { ObjectId } from 'bson';

export type User = {
  _id?: ObjectId;
  email: string;
  password: string;
  username: string;
};

export type Project = {
  id: number;
  city: null | string;
  country: null | string;
  title: string;
  description: string;
  open_amount_in_cents: number;
  progress_percentage: number;
};
