import { noResponse } from './errors/errors.js';
import * as UserController from './controllers/users.controller.js';
import { GET, POST, PUT, DELETE } from './utils/constants.js';
import * as url from 'url';

const requestHandler = (req: any, res: any) => {
  let method: string | undefined = req.method;
  const queryObject = url.parse(req.url!, true).path;
  const userId = queryObject?.split('/').slice(-1).join();

  console.log('queryObj', queryObject);
  console.log('userId', userId);

  if (queryObject?.includes('/users')) {
    switch (method) {
      case GET:
        UserController.getUsersList(req, res);
        break;
      case POST:
        UserController.createUser(req, res);
        break;
      case PUT:
        UserController.updateUser(req, res, userId);
        break;
      case DELETE:
        UserController.deleteUser(req, res, userId);
        break;
    }
  } else {
    noResponse(req, res);
  }
};

export default requestHandler;
