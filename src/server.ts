import http, { IncomingMessage, ServerResponse } from 'http';
import { noResponse } from './errors/errors.js';
import { GET, POST, PUT, DELETE } from './utils/constants.js';

const requestHandler = (req: IncomingMessage, res: ServerResponse) => {
  let url: string | undefined = req.url;
  let method: string | undefined = req.method;

  if (url?.includes('/users')) {
    switch (method) {
      case GET:
      case POST:
      case PUT:
      case DELETE:
    }
  } else {
    noResponse(req, res);
  }
};

export default requestHandler;
