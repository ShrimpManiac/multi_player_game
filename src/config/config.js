import {
  CLIENT_VERSION,
  DB1_HOST,
  DB1_NAME,
  DB1_PASSWORD,
  DB1_PORT,
  DB1_USER,
  DB2_HOST,
  DB2_NAME,
  DB2_PASSWORD,
  DB2_PORT,
  DB2_USER,
  HOST,
  PORT,
} from '../constants/env.js';
import { PACKET_TYPE_BYTES, TOTAL_LENGTH_BYTES } from '../constants/header.js';

export const config = {
  server: {
    host: HOST,
    port: PORT,
  },
  client: {
    version: CLIENT_VERSION,
  },
  packet: {
    totalLength: TOTAL_LENGTH_BYTES,
    typeLength: PACKET_TYPE_BYTES,
  },
  database: {
    GAME_DB: {
      name: DB1_NAME,
      user: DB1_USER,
      password: DB1_PASSWORD,
      host: DB1_HOST,
      port: DB1_PORT,
    },
    USER_DB: {
      name: DB2_NAME,
      user: DB2_USER,
      password: DB2_PASSWORD,
      host: DB2_HOST,
      port: DB2_PORT,
    },
  },
};
