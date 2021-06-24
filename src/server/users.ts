import type { User } from '../types';
import { getUsersCollection } from './database';

export const readUsers = async (): Promise<User[]> => {
  return await getUsersCollection().find().toArray();
};

export const readUser = async (user: Partial<User>): Promise<User | null> => {
  const result = await getUsersCollection().findOne(user);
  if (!user) {
    throw new Error('There is no user with that email adress');
  }
  return result;
};

export const saveUser = async (newUser: User): Promise<void> => {
  await getUsersCollection().insertOne(newUser);
};
