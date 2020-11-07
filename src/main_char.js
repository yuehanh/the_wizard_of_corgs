import { HealthBar } from "./health_bar";
import { Vector } from "./vector";

export class MainChar {
  constructor(game, image) {
    this.OFFSET = 40;
    this.health = 5;
    this.game = game;
    this.width = 60;
    this.height = 60;
    this.pos = new Vector(
      game.width / 2 - this.width / 2,
      game.height - this.height - this.OFFSET
    );
    this.image = image;
    this.frameSpeed = 20;
  }

  draw(ctx, image, frame) {
    ctx.drawImage(
      image,
      0 + 48 * (Math.floor(frame / this.frameSpeed) % 3),
      336,
      48,
      48,
      this.pos.x,
      this.pos.y,
      this.width,
      this.height
    );
    // this.drawHealth(ctx);
  }

  hurt() {
    this.health -= 1;
    this.frameSpeed = 2;
    setTimeout(() => {
      this.frameSpeed = 20;
    }, 500);
  }
  update() {}
}
