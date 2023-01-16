import { IncomingMessage, ServerResponse } from 'http';
import { noResponse } from './errors/errors.js';
import * as UserController from './controllers/users.controller.js';
import { GET, POST, PUT, DELETE } from './utils/constants.js';

const requestHandler = (req: IncomingMessage, res: ServerResponse) => {
  let url: string | undefined = req.url;
  let method: string | undefined = req.method;

  if (url?.includes('/users')) {
    switch (method) {
      case GET:
        UserController.getUsersList(req, res);
      case POST:
        UserController.createUser(req, res);
      case PUT:
        UserController.updateUser(req, res);
      case DELETE:
        UserController.deleteUser(req, res);
    }
  } else {
    noResponse(req, res);
  }
};

export default requestHandler;
