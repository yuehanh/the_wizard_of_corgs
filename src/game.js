import { Command } from "./command";
import { Enemy } from "./enemies";
import { corgi, ghostSprites, hearts } from "./images";
import { MainChar } from "./main_char";

export class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.width = canvas.width;
    this.height = canvas.height;

    this.enemies = [];
    this.maxHealth = 5;
    this.level = 1;
    this.score = 0;
    this.levelStarted = false;
    this.levelCompleted = false;
    this.levelChanged = false;
    this.newLevel = false;

    this.gameOver = false;

    this.MAX_ENEMY = 10;
  }

  start() {
    const command = new Command(canvas, this);

    this.addMainChar();
    this.addEnemy({
      level: 1,
      game: this,
      size: 100,
    });
    this.addEnemy({
      level: 2,
      game: this,
      size: 100,
    });
    this.addEnemy({
      level: 3,
      game: this,
      size: 100,
    });
    this.addEnemy({
      level: 4,
      game: this,
      size: 100,
    });
    this.addEnemy({
      level: 5,
      game: this,
      size: 100,
    });
  }
  addMainChar() {
    this.mainChar = new MainChar(this, corgi);
  }

  addEnemy(attr) {
    const enemy = new Enemy(attr);
    this.enemies.push(enemy);
  }

  receiveCommand(direction) {
    for (const enemy of this.enemies) {
      enemy.update(direction);
    }
  }

  step(frame) {
    this.draw(frame);
    this.move();
  }

  move() {
    for (const enemy of this.enemies) {
      enemy.move();
    }
  }

  draw(frame) {
    this.ctx.clearRect(0, 0, this.width, this.height);
    for (const enemy of this.enemies) {
      enemy.draw(this.ctx, ghostSprites, frame);
    }
    for (const enemy of this.enemies) {
      enemy.drawHealth(this.ctx);
    }
    this.mainChar.draw(this.ctx, corgi, frame);
    this.drawHearts();
  }

  remove(obj) {
    let idx = this.enemies.indexOf(obj);
    this.enemies.splice(idx, 1);
  }

  drawHearts() {
    let i = 0;
    while (i < this.mainChar.health) {
      this.ctx.drawImage(hearts, 0, 0, 17, 17, 10 + i * 43, 10, 40, 40);
      i++;
    }
    while (i < this.maxHealth) {
      this.ctx.drawImage(hearts, 17 * 4, 0, 17, 17, 10 + i * 43, 10, 40, 40);
      i++;
    }
  }
}
