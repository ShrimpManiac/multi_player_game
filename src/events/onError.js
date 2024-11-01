import { handleError } from '../utils/error/errorHandler.js';
import CustomError from '../utils/error/customError.js';
import { ErrorCodes } from '../utils/error/errorCodes.js';
import { removeUser } from '../sessions/user.session.js';
import { leaveGame } from '../sessions/game.session.js';

export const onError = (socket) => (error) => {
  leaveGame(socket);
  removeUser(socket);

  console.error('소켓 오류:', error);
  handleError(socket, new CustomError(ErrorCodes.SOCKET_ERROR, `소켓 오류: ${error.message}`));
};
