import CustomError from '../utils/error/customError.js';
import { ErrorCodes } from '../utils/error/errorCodes.js';
import { gameSession } from './sessions';
import { getUserById } from './user.session.js';

export const getGameSession = () => {
  return gameSession;
};

export const joinGame = (userId) => {
  if (!gameSession) {
    throw new CustomError(ErrorCodes.GAME_NOT_FOUND, '게임 세션을 찾을 수 없습니다.');
  }

  const user = getUserById(userId);
  if (!user) {
    throw new CustomError(ErrorCodes.USER_NOT_FOUND, '유저를 찾을 수 없습니다.');
  }

  const userExists = gameSession.getUser(userId);
  if (!userExists) {
    gameSession.addPlayer(user);
  }
};
