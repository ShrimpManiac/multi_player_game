import { config } from '../config/config.js';
import { PACKET_TYPE } from '../constants/header.js';
import { packetParser } from '../utils/parser/packetParser.js';

export const onData = (socket) => (data) => {
  // 기존 버퍼에 새로 수신된 데이터를 추가
  socket.buffer = Buffer.concat([socket.buffer, data]);

  // 패킷의 총 헤더 길이 (패킷 길이 정보 + 타입 정보)
  const totalHeaderLength = config.packet.totalLength + config.packet.typeLength;

  // 버퍼에 최소한 전체 헤더가 있을 때만 패킷을 처리
  while (socket.buffer.length >= totalHeaderLength) {
    // 1. 패킷 길이 정보 수신 (4바이트)
    const length = socket.buffer.readUInt32BE(0);
    // 2. 패킷 타입 정보 수신 (1바이트)
    const packetType = socket.buffer.readUInt8BE(config.packet.totalLength);

    // 아직 전체 패킷이 도착하지 않았다면 데이터 수신을 보류
    if (socket.buffer.length < length) {
      break;
    }

    // 3. 데이터 수신: 패킷 데이터를 자르고 버퍼에서 제거
    const packet = socket.buffer.subarray(totalHeaderLength, length);
    socket.buffer = socket.bugger.subarray(length);

    console.log(`length: ${length}, packetType: ${packetType}`); // LOG
    console.log(`packet: ${packet}`); // LOG

    switch (packetType) {
      case PACKET_TYPE.PING: {
        break;
      }
      case PACKET_TYPE.NORMAL: {
        const { handlerId, userId, payload } = packetParser(packet);
        console.log(`handlerId: ${handlerId}`);
        console.log(`userId: ${userId}`);
        console.log(`payload: ${payload}`);
        break;
      }
    }
  }
};
