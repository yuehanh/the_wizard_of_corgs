import { Game } from "./game";

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const bound = canvas.getBoundingClientRect();
  canvas.width = bound.width;
  canvas.height = bound.height;
  const ctx = canvas.getContext("2d");
  const game = new Game();
  game.start();
});
