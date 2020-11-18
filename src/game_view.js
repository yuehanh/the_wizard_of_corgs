import { corgi, ghostSprites, hearts } from "./images";

export class GameView {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
    this.frameId = 0;
    this.animate = this.animate.bind(this);
    this.loadedImages = new Set();
    this.start();
  }

  start() {
    corgi.onload = () => {
      this.loadedImages.add("corgi");
    };
    ghostSprites.onload = () => {
      this.loadedImages.add("sprites");
    };
    hearts.onload = () => {
      this.loadedImages.add("hearts");
    };
    this.game.start();
    this.animate();
  }

  animate() {
    if (!this.game.gameOver && this.loaded()) {
      this.game.step(this.frameId);
    }
    this.frameId = requestAnimationFrame(this.animate);
  }

  loaded() {
    return (
      this.loadedImages.has("corgi") &&
      this.loadedImages.has("sprites") &&
      this.loadedImages.has("hearts")
    );
  }
}
