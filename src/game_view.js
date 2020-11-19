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
    this.gameOverMenu = document.getElementById("game-over");
    this.finalScore = document.getElementById("final-score");
    this.score = document.getElementById("score");
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
    this.frameId = requestAnimationFrame(this.animate);
    this.score.innerText = this.game.score;
    if (this.game.gameOver) {
      cancelAnimationFrame(this.frameId);
      this.finalScore.innerText = this.game.score;
      this.gameOverMenu.classList.remove("hidden");
    }
  }

  loaded() {
    return (
      this.loadedImages.has("corgi") &&
      this.loadedImages.has("sprites") &&
      this.loadedImages.has("hearts")
    );
  }

  restart() {
    this.game = new Game(this.canvas);
    this.command.game = this.game;
    this.gameOverMenu.classList.add("hidden");
    this.game.addMainChar();
    this.animate();
    this.startGame();
  }
}
