import { Command } from "./command";
import { Game } from "./game";
import { corgi, ghostSprites, hearts } from "./images";

export class GameView {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.game = new Game(canvas);
    this.frameId = 0;
    this.animate = this.animate.bind(this);
    this.loadedImages = new Set();
    this.command = new Command(canvas, this.game);

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
    this.game.addMainChar();

    this.animate();
  }

  startGame() {
    this.game.start();
  }

  animate() {
    if (!this.game.gameOver && this.loaded()) {
      this.game.step(this.ctx, this.frameId);
    }

    if (this.game.gameOver) {
      console.log("game Over");
      cancelAnimationFrame(this.frameId);
      this.gam;
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
