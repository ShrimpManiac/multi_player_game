import net from 'net';
import { config } from './src/config/config.js';
import { onConnection } from './src/events/onConnection.js';

const { host, port } = config.server;

const server = net.createServer(onConnection);

server.listen(port, () => {
  console.log(`서버가 ${host}:${port}}에서 실행중입니다.`);
});
