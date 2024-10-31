import User from '../classes/models/user.class.js';
import { userSessions } from './sessions.js';

export const addUser = (socket, uuid) => {
  const user = new User(socket, uuid);
  userSessions.push(user);
  return user;
};

export const removeUser = (socket) => {
  const index = userSessions.findIndex((user) => user.socket === socket);
  if (index !== -1) {
    return userSessions.splice(index, 1)[0];
  }
};

export const getuserById = (id) => {
  return userSessions.find((user) => user.id === id);
};
