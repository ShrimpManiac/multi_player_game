import { RESPONSE_SUCCESS_CODE } from '../../constants/handlerIds.js';
import { HANDLER_IDS } from '../../constants/handlerIds.js';
import { addUser } from '../../session/user.session.js';
import { handleError } from '../../utils/error/errorHandler.js';
import { createResponse } from '../../utils/response/createResponse.js';

const initialHandler = async ({ socket, userId, payload }) => {
  try {
    const { deviceId } = payload;

    addUser(socket, deviceId);

    const initialResponse = createResponse(HANDLER_IDS.INIT, RESPONSE_SUCCESS_CODE, {
      userId: deviceId,
    });
    socket.write(initialResponse);
  } catch (error) {
    handleError(socket, error);
  }
};

export default initialHandler;
