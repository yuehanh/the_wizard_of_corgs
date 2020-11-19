import { HealthBar, HealthType } from "./health_bar";
import { rndEntryPoint } from "./util";

export class Enemy {
  constructor(attr) {
    this.level = attr.level;
    this.health = [];
    this.game = attr.game;
    this.size = attr.size || 40;
    this.healthBar = new HealthBar(this);
    this.mainChar = this.game.mainChar;
    this.targetPos = this.mainChar.center;
    this.image = attr.image;
    this.status = true;
    this.init();
    this.value = this.level * 10;
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

  draw(ctx, image, frame) {
    ctx.drawImage(
      image,
      0 + 48 * (Math.floor(frame / 20) % 6),
      0,
      48,
      48,
      this.pos.x,
      this.pos.y,
      this.size,
      this.size
    );

    this.drawHealth(ctx);
  }

  drawHealth(ctx) {
    this.healthBar.draw(ctx);
  }

  move() {
    if (this.status && !this.isCollidedWith()) {
      this.pos = this.pos.add(this.vel);
    } else {
      this.game.score += this.value;
      this.remove();
      if (this.isCollidedWith()) {
        this.mainChar.hurt();
      }
    }
  }

  update(direction) {
    if (direction === this.health[0]) {
      this.health = this.health.slice(1);
      this.game.strike = true;
    }
    if (this.health.length === 0) {
      this.status = false;
    }
  }

  remove() {
    this.game.remove(this);
  }

  isCollidedWith() {
    const mainChar = this.mainChar;
    return (
      this.pos.x < mainChar.pos.x + mainChar.size &&
      this.pos.x + this.size > mainChar.pos.x &&
      this.pos.y < mainChar.pos.y + mainChar.size &&
      this.pos.y + this.size > mainChar.pos.y
    );
  }
}
