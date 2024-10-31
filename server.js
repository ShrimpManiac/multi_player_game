import net from 'net';
import { config } from './src/config/config.js';

const { host, port } = config.server;

const server = net.createServer((socket) => {
  console.log(`클라이언트가 연결되었습니다: ${socket.remoteAddress}:${socket.remotePort}`);

  socket.on(`data`, (data) => {
    console.log(`data: ${data}`);
  });

  socket.on(`end`, () => {
    console.log(`클라이언트 연결이 종료되었습니다: ${socket.remoteAddress}:${socket.remotePort}`);
  });

  socket.on(`error`, (error) => {
    console.error('소켓 에러:', error);
  });
});

server.listen(port, () => {
  console.log(`서버가 ${host}:${port}}에서 실행중입니다.`);
});
