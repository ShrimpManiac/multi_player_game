class User {
  constructor(socket, id, playerId, latency, x = 0, y = 0) {
    this.id = id;
    this.playerId = playerId;
    this.socket = socket;
    this.x = x;
    this.y = y;
    this.lastUpdateTime = Date.now();
    this.latency = latency;
  }

  updatePosition(x, y) {
    this.x = x;
    this.y = y;
    this.lastUpdateTime = Date.now();
  }
}

export default User;
