import { IncomingMessage } from 'http';

export const getJSONDataFromRequest = <T>(req: IncomingMessage): Promise<T> => {
  return new Promise((resolve) => {
    const chunks = [] as Uint8Array[];
    req.on('data', (chunk: any) => {
      chunks.push(chunk);
    });
    req.on('end', () => {
      resolve(JSON.parse(Buffer.concat(chunks).toString()));
    });
  });
};
