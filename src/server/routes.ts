import express from 'express';
import { getProjectById } from './betterPlaceDB';
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
      res.status(404).send('Kein Benutzerkonto gefunden');
      return;
    }

    res.setHeader(
      'Set-Cookie',
      `userId=${user._id};path=/;Max-Age=${365 * 24 * 60 * 60}`
    );

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

router.get('/projects/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const project = await getProjectById(id);
    res.status(200).json(project);
  } catch (error) {
    next(error);
  }
});

export default router;
