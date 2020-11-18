import { Command } from "./command";
import { Enemy } from "./enemies";
import { corgi, ghostSprites, hearts } from "./images";
import { MainChar } from "./main_char";

export class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.width = canvas.width;
    this.height = canvas.height;

    this.enemies = [];
    this.maxHealth = 5;
    this.level = 0;
    this.score = 0;
    this.levelStarted = false;
    this.gameOver = false;

    this.MAX_ENEMY = 10;
  }

  start() {
    this.startNewLevel();
  }

  startNewLevel() {
    this.levelStarted = true;
    this.level++;
    this.addEnemy();
  }

  addMainChar() {
    this.mainChar = new MainChar(this, corgi);
  }

  addEnemy() {
    const enemyNum = Math.min(this.level, this.MAX_ENEMY);
    const attr = {
      level: this.level,
      game: this,
    };
    for (let i = 0; i < enemyNum; i++) {
      const enemy = new Enemy(attr);
      this.enemies.push(enemy);
    }
  }

  receiveCommand(direction) {
    for (const enemy of this.enemies) {
      enemy.update(direction);
    }
  }

  step(ctx, frame) {
    this.draw(ctx, frame);
    this.move();
    this.isGameOver();
    this.isLevelCompleted();
  }

  move() {
    for (const enemy of this.enemies) {
      enemy.move();
    }
  }

  isGameOver() {
    if (this.mainChar.health <= 0) {
      this.gameOver = true;
    }
  }

  isLevelCompleted() {
    if (this.enemies.length < 1 && this.levelStarted) {
      this.levelStarted = false;
      setTimeout(() => {
        this.startNewLevel();
      }, 3000);
    }
  }
  remove(obj) {
    let idx = this.enemies.indexOf(obj);
    this.enemies.splice(idx, 1);
  }

  draw(ctx, frame) {
    ctx.clearRect(0, 0, this.width, this.height);
    for (const enemy of this.enemies) {
      enemy.draw(ctx, ghostSprites, frame);
    }
    for (const enemy of this.enemies) {
      enemy.drawHealth(ctx);
    }
    this.mainChar.draw(ctx, corgi, frame);
    this.drawHearts(ctx);
  }

  drawHearts(ctx) {
    let i = 0;
    while (i < this.mainChar.health) {
      ctx.drawImage(hearts, 0, 0, 17, 17, 10 + i * 43, 10, 40, 40);
      i++;
    }
    while (i < this.maxHealth) {
      ctx.drawImage(hearts, 17 * 4, 0, 17, 17, 10 + i * 43, 10, 40, 40);
      i++;
    }
  }
}
