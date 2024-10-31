import { createResponse } from '../response/createResponse.js';
import { ErrorCodes } from './errorCodes.js';

export const handleError = (socket, error) => {
  let responseCode;
  let message;
  console.error(error);

  if (error.code) {
    responseCode = error.code;
    message = error.message;
    console.error(`에러코드: ${responseCode}, 메세지: ${message}`);
  } else {
    responseCode = ErrorCodes.SOCKET_ERROR; // 일반 에러코드
    message = error.message;
    console.error(`일반에러: ${error.message}`);
  }

  const errorResponse = createResponse(-1, responseCode, { message });
  socket.write(errorResponse);
};
