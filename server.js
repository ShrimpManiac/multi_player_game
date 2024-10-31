import net from 'net';
import { config } from './src/config/config.js';
import { onConnection } from './src/events/onConnection.js';
import initServer from './src/init/index.js';

const { host, port } = config.server;

const server = net.createServer(onConnection);

initServer()
  .then(() => {
    server.listen(port, () => {
      console.log(`서버가 ${host}:${port}}에서 실행중입니다.`);
      console.log(server.address());
    });
  })
  .catch((error) => {
    console.error(error);
    process.exit(1); // 오류 발생 시 프로세스 종료
  });
