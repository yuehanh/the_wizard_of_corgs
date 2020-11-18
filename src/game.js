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
    this.animate = this.animate.bind(this);
    this.loadedImages = new Set();
    this.frameId = 0;
    this.maxHealth = 5;
    this.enemies = [];
  }

  start() {
    const command = new Command(canvas, this);
    corgi.onload = () => {
      this.loadedImages.add("corgi");
    };
    ghostSprites.onload = () => {
      this.loadedImages.add("sprites");
    };
    hearts.onload = () => {
      this.loadedImages.add("hearts");
    };
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
    this.animate();
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
  animate() {
    if (this.loaded()) {
      this.draw();
      this.move();
    }
    this.frameId = requestAnimationFrame(this.animate);
  }
  move() {
    for (const enemy of this.enemies) {
      enemy.move();
    }
  }
  draw() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    for (const enemy of this.enemies) {
      enemy.draw(this.ctx, ghostSprites, this.frameId);
    }
    for (const enemy of this.enemies) {
      enemy.drawHealth(this.ctx);
    }
    this.mainChar.draw(this.ctx, corgi, this.frameId);
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
  loaded() {
    return (
      this.loadedImages.has("corgi") &&
      this.loadedImages.has("sprites") &&
      this.loadedImages.has("hearts")
    );
  }
}
