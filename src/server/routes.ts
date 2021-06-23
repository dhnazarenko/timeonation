import express from 'express';
import { readUser, readUsers, saveUser } from './users';

const router = express.Router();

router.post('/users', async (req, res) => {
  await saveUser(req.body);
  res.send('New user signed up');
});

router.get('/users', async (_req, res) => {
  const users = await readUsers();
  res.json(users);
});

router.post('/users/login', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await readUser({ username, password });
    if (!user) {
      res.status(404).send('User not found');
      return;
    }

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

export default router;
