import { RESPONSE_SUCCESS_CODE } from '../../constants/handlerIds.js';
import { HANDLER_IDS } from '../../constants/handlerIds.js';
import { joinGame } from '../../sessions/game.session.js';
import { addUser } from '../../sessions/user.session.js';
import { handleError } from '../../utils/error/errorHandler.js';
import { createResponse } from '../../utils/response/createResponse.js';

const initialHandler = async ({ socket, userId, payload }) => {
  try {
    const { deviceId, playerId, latency } = payload;

    // deviceId가 존재할 경우 deviceId로 유저 등록
    // 그렇지 않으면 클라이언트에서 자체 생성한 userId로 등록
    if (deviceId && deviceId.length > 0) {
      addUser(socket, deviceId, playerId, latency);
    } else {
      addUser(socket, userId, playerId, latency);
    }

    joinGame(deviceId);

    const initialResponse = createResponse(HANDLER_IDS.INIT, RESPONSE_SUCCESS_CODE, {
      userId: deviceId,
    });
    socket.write(initialResponse);
  } catch (error) {
    handleError(socket, error);
  }
};

export default initialHandler;
