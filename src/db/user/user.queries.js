export const SQL_QUERIES = {
  FIND_USER_BY_DEVICE_ID: 'SELECT * FROM users WHERE device_id = ?',
  CREATE_USER: 'INSERT INTO user (device_id, x, y) VALUES (?, 0, 0)',
  UPDATE_USER_LOGIN: 'UPDATE user SET last_login = CURRENT_TIMESTAMP WHERE device_id = ?',
  UPDATE_USER_LOCATION: `UPDATE user SET x = ?, y = ? WHERE device_id = ?`,
};
