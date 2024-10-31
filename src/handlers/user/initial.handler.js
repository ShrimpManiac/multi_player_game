import { RESPONSE_SUCCESS_CODE } from '../../constants/handlerIds';
import { HANDLER_IDS } from '../../constants/handlerIds';
import { addUser } from '../../session/user.session.js';
import { createResponse } from '../../utils/response/createResponse.js';

const initialHandler = async ({ socket, userId, payload }) => {
  const { deviceId } = payload;

  addUser(socket, deviceId);

  const initialResponse = createResponse(HANDLER_IDS.INIT, RESPONSE_SUCCESS_CODE, {
    userId: deviceId,
  });
  socket.write(initialResponse);
};

export default initialHandler;
