import { leaveGame } from '../sessions/game.session.js';
import { removeUser } from '../sessions/user.session.js';
export const onEnd = (socket) => () => {
  leaveGame(socket);
  removeUser(socket);

  console.log(`클라이언트 연결이 종료되었습니다: ${socket.remoteAddress}:${socket.remotePort}`);
};
