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
  profile_picture: string;
  carrier: string;
  links: string;
};

export type Projects = {
  id: number;
  city: null | string;
  country: null | string;
  title: string;
  open_amount_in_cents: number;
  profile_picture: string;
  carrier: string;
}[];
