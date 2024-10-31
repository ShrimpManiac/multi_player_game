import { GAME_STATE, MAX_PLAYERS } from '../../constants/game.js';
import CustomError from '../../utils/error/customError.js';
import { ErrorCodes } from '../../utils/error/errorCodes.js';

class Game {
  constructor(id) {
    this.id = id;
    this.players = [];
    this.state = GAME_STATE.WAITING;
  }

  addPlayer(user) {
    // 검증: 최대인원 도달
    if (this.players.length >= MAX_PLAYERS) {
      throw new CustomError(
        ErrorCodes.GAME_FULL,
        `현재 참가자 수(${this.players.length})가 최대인원에 도달하여 참가할 수 없습니다.`,
      );
    }

    // 플레이어를 게임에 참가
    this.players.push(user);

    // 최대인원에 도달시 자동으로 3초 뒤 게임 시작
    if (this.players.length === MAX_PLAYERS) {
      setTimeout(() => {
        this.startGame();
      }, 3000);
    }
  }

  getPlayer(userId) {
    return this.players.find((player) => player.id === userId);
  }

  removePlayer(userId) {
    this.players = this.players.filter((player) => player.id !== userId);

    // 현재 참가중인 인원이 최대인원보다 적을 시 게임상태를 '대기'로 변경
    if (this.players.length < MAX_PLAYERS) {
      this.state = GAME_STATE.WAITING;
    }
  }

  startGame() {
    this.state = GAME_STATE.IN_PROGRESS;
  }
}

export default Game;
