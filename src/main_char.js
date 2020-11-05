import { HealthBar } from "./health_bar";
import { Vector } from "./vector";

export class MainChar {
  constructor(game) {
    this.OFFSET = 40;
    this.health = 5;
    this.game = game;
    this.width = 40;
    this.height = 40;
    this.pos = new Vector(
      game.width / 2 - this.width / 2,
      game.height - this.height - this.OFFSET
    );
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.rect(this.pos.x, this.pos.y, this.width, this.height);
    ctx.fillStyle = "red";
    ctx.fill();
    // this.drawHealth(ctx);
  }

  // drawHealth(ctx) {
  //   this.healthBar.draw(ctx);
  // }

  update() {}

  // remove() {
  //   this.game.remove(this);
  // }
}
