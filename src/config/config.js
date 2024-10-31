import { CLIENT_VERSION, HOST, PORT } from '../constants/env.js';

export const config = {
  server: {
    host: HOST,
    port: PORT,
  },
  client: {
    version: CLIENT_VERSION,
  },
};
