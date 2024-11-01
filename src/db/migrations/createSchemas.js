import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pools from '../database.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const executeSqlFile = async (pool, filePath) => {
  const sql = fs.readFileSync(filePath, 'utf8');
  const queries = sql
    .split(';')
    .map((query) => query.trim())
    .filter((query) => query.length > 0);

  for (const query of queries) {
    await pool.query(query);
  }
};

const createSchema = async () => {
  const sqlDir = path.join(__dirname, '../sql');
  try {
    await executeSqlFile(pools.USER_DB, path.join(sqlDir, 'user_db.sql'));
    // 필요에 따라 추가
  } catch (error) {
    console.error('데이터데이스 테이블 생성 중 오류가 발생했습니다:', error);
  }
};

createSchema()
  .then(() => {
    console.log('마이그레이션이 완료되었습니다.');
    process.exit(0);
  })
  .catch((error) => {
    console.error(`마이그레이션 도중 오류가 발생했습니다:`, error);
    process.exit(1);
  });
