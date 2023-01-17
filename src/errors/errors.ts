import { IncomingMessage, ServerResponse } from 'http';

const noResponse = (req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(404);
  res.write('Sorry, but we have no response..\n');
  res.end();
};

export { noResponse };
