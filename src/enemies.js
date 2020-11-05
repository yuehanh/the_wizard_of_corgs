import { HealthBar } from "./health_bar";
import { Vector } from "./vector";

export class Enemy {
  constructor(attr) {
    this.health = ["hBar", "vBar", "fSlash", "bSlash", "hBar"];
    this.game = attr.game;
    this.pos = attr.pos;
    this.vel = attr.velocity;
    this.width = attr.width;
    this.height = attr.height;
    this.healthBar = new HealthBar(this);
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.rect(this.pos.x, this.pos.y, this.width, this.height);
    ctx.fillStyle = "red";
    ctx.fill();
    this.drawHealth(ctx);
  }

  drawHealth(ctx) {
    this.healthBar.draw(ctx);
  }

  move() {
    this.pos.add(this.vel);
  }

  update(direction) {
    if (direction === this.health[0]) {
      this.health = this.health.slice(1);
    }
    if (this.health.length === 0) {
      this.remove();
    }
  }

  remove() {
    this.game.remove(this);
  }

  isCollidedWith(mainChar) {
    this.pos.x < mainChar.pos.x + mainChar.width &&
      this.pos.x + this.width > mainChar.pos.x &&
      this.pos.y < mainChar.pos.y + mainChar.height &&
      this.pos.y + this.height > mainChar.pos.y;
  }
}
