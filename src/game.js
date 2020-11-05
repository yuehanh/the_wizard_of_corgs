import { Command } from "./command";
import { Enemy } from "./enemies";

export class Game {
  constructor(canvas) {
    this.enemies = [];
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
  }

  start() {
    const command = new Command(canvas, this);
    this.addEnemy();
    this.draw();
  }
  addEnemy() {
    const enemy = new Enemy(this);
    this.enemies.push(enemy);
  }
  receiveCommand(direction) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (const enemy of this.enemies) {
      enemy.update(direction);
    }
    this.draw();
  }

  draw() {
    for (const enemy of this.enemies) {
      enemy.draw(this.ctx);
    }
  }

  remove(obj) {
    debugger;
    let idx = this.enemies.indexOf(obj);
    this.enemies.splice(idx, 1);
  }
}
