import * as UserService from '../services/index.js';
import { User } from '../interfaces/users.interface.js';
import { v4 as uuidv4 } from 'uuid';

export const getUsersList = async (req: any, res: any) => {
  const usersList: User[] = await UserService.getAllUsers();
  console.log(`in get ${JSON.stringify(usersList)}`);

  try {
    res.status(200).send(usersList);
  } catch (e: any) {
    res.status(404).send(e.message);
  }
};

export const getUser = async (req: any, res: any) => {
  const { userId } = req.query;
  const user: User = await UserService.getUser(userId);
  console.log(`in getUser ${JSON.stringify(user)}`);

  try {
    res.status(200).send(user);
  } catch (e: any) {
    res.status(404).send(e.message);
  }
};

export const createUser = async (req: any, res: any) => {
  const user: User = req.body;

  if (!user.id) {
    user.id = +uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
  }

  await UserService.createUser(user);
  try {
    res.status(201).send({
      message: 'Successfully added',
      IsSuccess: true,
      result: user,
    });
  } catch (e: any) {
    res.status(404).send(e.message);
  }
};

export const updateUser = async (req: any, res: any) => {
  const user: User = req.body;

  await UserService.updateUser(user);
  try {
    res.status(200).send({
      message: 'Successfully updated',
      IsSuccess: true,
      result: user,
    });
  } catch (e: any) {
    res.status(404).send(e.message);
  }
};

export const deleteUser = async (req: any, res: any) => {
  const { userId } = req.query;

  await UserService.deleteUser(userId);
  try {
    res.status(204).send({
      message: 'Successfully deleted',
      IsSuccess: true,
      result: '',
    });
  } catch (e: any) {
    res.status(404).send(e.message);
  }
};
