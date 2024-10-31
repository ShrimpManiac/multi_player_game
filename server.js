import net from 'net';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;
const HOST = process.env.HOST;

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

server.listen(PORT, () => {
  console.log(`서버가 ${HOST}:${PORT}}에서 실행중입니다.`);
});
