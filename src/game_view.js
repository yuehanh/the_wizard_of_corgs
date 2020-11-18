import { corgi, ghostSprites, hearts } from "./images";

class GameView {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
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
  }

  animate() {}

  loaded() {
    return (
      this.loadedImages.has("corgi") &&
      this.loadedImages.has("sprites") &&
      this.loadedImages.has("hearts")
    );
  }
}
