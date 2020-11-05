import { Command } from "./command";
import { Enemy } from "./enemies";
import { MainChar } from "./main_char";

export class Game {
  constructor(canvas) {
    this.enemies = [];
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.width = canvas.width;
    this.height = canvas.height;
  }

  start() {
    const command = new Command(canvas, this);
    this.mainChar = new MainChar(this);
    // this.addEnemy();
    this.draw();
  }
  addEnemy() {
    const enemy = new Enemy(this);
    this.enemies.push(enemy);
  }
  receiveCommand(direction) {
    this.ctx.clearRect(0, 0, this.width, this.height);
    for (const enemy of this.enemies) {
      enemy.update(direction);
    }
    this.draw();
  }

  draw() {
    for (const enemy of this.enemies) {
      enemy.draw(this.ctx);
    }
    this.mainChar.draw(this.ctx);
  }

  remove(obj) {
    let idx = this.enemies.indexOf(obj);
    this.enemies.splice(idx, 1);
  }
}
