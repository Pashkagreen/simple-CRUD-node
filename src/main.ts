import http, { RequestOptions, ServerResponse } from 'http';
import * as dotenv from 'dotenv';

dotenv.config();

if (!process.env.PORT || !process.env.HOST) {
  console.log(`Error to get ports or hostss`);
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
const HOST: string = process.env.HOST;

const server = http.createServer((req: RequestOptions, res: ServerResponse) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end('Hello');
});

server.listen(PORT, HOST, () => {
  console.log(`Server launched on ${HOST}:${PORT}`);
});
