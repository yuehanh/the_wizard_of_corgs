import { Enemy } from "./enemies";

export class Game {
  constructor(command) {
    this.command;
    this.enemies = [];
  }

  addEnemy() {
    const enemy = new Enemy();
    this.enemies.push(enemy);
  }
  receiveCommand(command) {
    for (const enemy of this.enemies) {
      enemy.update(command);
    }
  }
}
