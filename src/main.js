import { Game } from "./game";

document.addEventListener("DOMContentLoaded", () => {
  const backgroundCanvas = document.getElementById("background-canvas");
  const bound = backgroundCanvas.getBoundingClientRect();
  backgroundCanvas.width = bound.width;
  backgroundCanvas.width = bound.height;
  let background = new Image();
  background.onload = () => {
    const backgroundCtx = backgroundCanvas.getContext("2d");
    backgroundCtx.drawImage(
      background,
      0,
      0,
      backgroundCanvas.width,
      backgroundCanvas.height
    );
  };

  background.src = "./image/background.png";

  const canvas = document.getElementById("canvas");
  canvas.width = bound.width;
  canvas.height = bound.height;

  const game = new Game(canvas);
  game.start();
});
