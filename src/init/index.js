import pools from '../db/database.js';
import { testAllConnections } from '../utils/db/testConnection.js';
import { loadProtos } from './loadProtos.js';

/**
 * 서버 초기화 작업을 수행하는 함수
 */
const initServer = async () => {
  try {
    await loadProtos();
    await testAllConnections(pools);
  } catch (error) {
    console.error('서버 초기화 중 오류가 발생했습니다:', error);
    process.exit(1); // 오류 발생 시 프로세스 종료
  }
};

export default initServer;
