import { Game } from "./game";
import { GameView } from "./game_view";
import { background } from "./images";

document.addEventListener("DOMContentLoaded", () => {
  const backgroundCanvas = document.getElementById("background-canvas");
  const bound = backgroundCanvas.getBoundingClientRect();
  backgroundCanvas.width = bound.width;
  backgroundCanvas.width = bound.height;
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

  const canvas = document.getElementById("canvas");
  canvas.width = bound.width;
  canvas.height = bound.height;
  const game = new Game(canvas);
  const gameView = new GameView(game, canvas);
});
