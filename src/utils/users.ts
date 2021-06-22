import type { User } from '../types';
import { getUsersCollection } from './database';

export const saveUser = async (user: User): Promise<void> => {
  await getUsersCollection().insertOne({ ...user });
};

export const readUsers = async (): Promise<User[]> => {
  return await getUsersCollection().find().sort({ email: 1 }).toArray();
};
