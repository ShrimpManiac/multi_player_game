import { handleError } from '../utils/error/errorHandler';
import CustomError from '../utils/error/customError';
import { ErrorCodes } from '../utils/error/errorCodes.js';
import { removeUser } from '../sessions/user.session.js';

export const onError = (socket) => (error) => {
  removeUser(socket);

  console.error('소켓 오류:', error);
  handleError(socket, new CustomError(ErrorCodes.SOCKET_ERROR, `소켓 오류: ${error.message}`));
};
