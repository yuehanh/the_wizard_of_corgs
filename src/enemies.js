import { HealthBar, HealthType } from "./health_bar";
import { rndEntryPoint } from "./util";

export class Enemy {
  constructor(attr) {
    this.level = attr.level;
    this.health = [];
    this.game = attr.game;
    this.width = attr.width;
    this.height = attr.height;
    this.healthBar = new HealthBar(this);
    this.targetPos = this.game.mainChar.pos;
    this.image = attr.image;
    this.status = true;
    this.init();
  }

  init() {
    let i = 0;
    while (i < this.level) {
      let rndIdx = Math.floor(Math.random() * HealthType.length);
      this.health.push(HealthType[rndIdx]);
      i++;
    }
    // this.pos = new Vector(40, 40);
    this.pos = rndEntryPoint(this.game, this);
    this.vel = this.targetPos.minus(this.pos);
    this.vel.scale(1 / (this.vel.mag * 5));
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      0,
      0,
      48,
      48,
      this.pos.x,
      this.pos.y,
      this.width,
      this.height
    );
    this.drawHealth(ctx);
  }

  drawHealth(ctx) {
    this.healthBar.draw(ctx);
  }

  move() {
    if (this.status) {
      this.pos = this.pos.add(this.vel);
    } else {
      this.remove();
    }
  }

  update(direction) {
    if (direction === this.health[0]) {
      this.health = this.health.slice(1);
    }
    if (this.health.length === 0) {
      this.status = false;
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
