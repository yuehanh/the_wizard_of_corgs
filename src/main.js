import { Game } from "./game";

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const bound = canvas.getBoundingClientRect();
  canvas.width = bound.width;
  canvas.height = bound.height;

  const game = new Game(canvas);
  game.start();
});
