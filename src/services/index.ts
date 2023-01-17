import { User, users } from '../interfaces/users.interface.js';

const getAllUsers = async (): Promise<User[]> => {
  return users;
};

const getUser = async (userId: number | string | undefined): Promise<User> => {
  return users.filter((i) => i.id === userId)[0];
};

const createUser = async (user: User): Promise<void> => {
  users.push(user);
};

const updateUser = async (user: User): Promise<User[]> => {
  let index = users.findIndex((d) => d.id == user['id']);
  if (index > 0 || index == 0) {
    users[index]['username'] = user['username'];
    users[index]['age'] = user['age'];
    users[index]['hobbies'] = user['hobbies'];

    return users;
  } else return Promise.reject();
};

const deleteUser = async (userId: number | string | undefined): Promise<User[] | void> => {
  console.log(`in delete user index is ${JSON.stringify(userId)}`);

  let index = users.findIndex((d) => d.id == userId);
  if (index > 0 || index == 0) {
    users.splice(index, 1);
    return users;
  }
};

export { getAllUsers, getUser, createUser, updateUser, deleteUser };
