import { Vector } from "./vector";

export class MainChar {
  constructor(game, image) {
    this.health = 1;
    this.game = game;
    this.size = 100;
    this.OFFSET = 60;
    this.pos = new Vector(
      game.width / 2 - this.size / 2,
      game.height - this.size - this.OFFSET
    );

    this.center = new Vector(
      this.pos.x + this.size / 2,
      this.pos.y + this.size / 2
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
      this.size,
      this.size
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
