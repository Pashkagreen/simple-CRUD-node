import * as UserService from '../services/index.js';
import { User } from '../interfaces/users.interface.js';
import { v4 as uuidv4 } from 'uuid';
import * as url from 'url';

export const getUsersList = async (req: any, res: any) => {
  const usersList: User[] = await UserService.getAllUsers();
  console.log(`in GetUsersList ${JSON.stringify(usersList)}`);

  try {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(usersList));
  } catch (e: any) {
    res.statusCode = 404;
    res.end(e.message);
  }
};

export const getUser = async (req: any, res: any) => {
  const { userId } = req.query;
  const user: User = await UserService.getUser(userId);
  console.log(`in getUser ${JSON.stringify(user)}`);

  try {
  } catch (e: any) {
    res.statusCode = 404;
    res.end(e.message);
  }
};

export const createUser = async (req: any, res: any) => {
  req.on('data', async (data: any) => {
    const user = JSON.parse(data);

    if (!user.id) {
      user.id = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    }

    await UserService.createUser(user);
    try {
      res.statusCode = 201;
      res.setHeader('Content-Type', 'application/json');
      res.end(
        JSON.stringify({
          message: 'Successfully created',
          user: user,
        }),
      );

      const usersList: User[] = await UserService.getAllUsers();
      console.log(`after createuser ${JSON.stringify(usersList)}`);
    } catch (e: any) {
      res.statusCode = 404;
      res.end(e.message);
    }
  });
};

export const updateUser = async (req: any, res: any, userId: number | string | undefined) => {
  const usersList: User[] = await UserService.getAllUsers();

  req.on('data', async (data: any) => {
    const user = JSON.parse(data);
    const isExist = usersList.filter((i) => i.id === userId)[0];

    if (isExist) {
      await UserService.updateUser(user);
    }
    try {
      res.statusCode = 200;
      res.end({
        message: 'Successfully updated',
        IsSuccess: true,
        result: user,
      });
    } catch (e: any) {
      res.statusCode = 404;
      res.end(e.message);
    }
  });
};

export const deleteUser = async (req: any, res: any, userId: number | string | undefined) => {
  await UserService.deleteUser(userId);
  try {
    res.statusCode = 204;
    res.end({
      message: 'Successfully deleted',
      IsSuccess: true,
      result: '',
    });
  } catch (e: any) {
    res.statusCode = 404;
    res.end(e.message);
  }
};
