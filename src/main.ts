import http from 'http';
import * as dotenv from 'dotenv';
import requestHandler from './server.js';

dotenv.config();

if (!process.env.PORT || !process.env.HOST) {
  console.log(`Error to get ports or hostss`);
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
const HOST: string = process.env.HOST;

const server = http.createServer(requestHandler);

server.listen(PORT, HOST, () => {
  console.log(`Server launched on http://${HOST}:${PORT}`);
});
