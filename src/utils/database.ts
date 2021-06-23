import { Collection, Db, MongoClient } from 'mongodb';
import type { User } from '../types';

let client: MongoClient;
export const connectDatabase = async (url: string): Promise<void> => {
  client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  const databasesList = await client.db().admin().listDatabases();
  console.log(databasesList);
};

export const getCollection = <T>(name: string): Collection<T> => {
  return client.db().collection<T>(name);
};

export const getUsersCollection = (): Collection<User> => {
  return getCollection<User>('users');
};

export function getDB(): Db {
  return client.db();
}
