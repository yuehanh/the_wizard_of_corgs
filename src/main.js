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
  const startBtn = document.getElementById("start-btn");
  const restartBtn = document.getElementById("restart-btn");
  const muteBtn = document.getElementById("mute-btn");
  const pauseBtn = document.getElementById("pause-btn");
  const music = document.getElementById("music");
  const links = document.getElementById("links");

  const controllers = document.getElementById("controllers");
  canvas.width = bound.width;
  canvas.height = bound.height;
  const gameView = new GameView(canvas);

  startBtn.classList.remove("hidden");
  startBtn.addEventListener("click", () => {
    gameView.startGame();
    startBtn.classList.add("hidden");
    controllers.classList.remove("hidden");
    music.play();
  });

  restartBtn.addEventListener("click", () => {
    gameView.restart();
  });

  document.addEventListener("keydown", (e) => {
    e.preventDefault();
    switch (e.key) {
      case "m":
        if (music.paused) {
          music.play();
        } else {
          music.pause();
        }
        break;
      case "p":
      case " ":
        debugger;
        pauseBtn.innerText = gameView.toggleGame();
    }
  });

  muteBtn.addEventListener("mousedown", (e) => {
    e.stopPropagation();
    if (music.paused) {
      music.play();
      muteBtn.innerText = "Mute";
    } else {
      music.pause();
      muteBtn.innerText = "Unmute";
    }
  });

  pauseBtn.addEventListener("mousedown", (e) => {
    e.stopPropagation();
    pauseBtn.innerText = gameView.toggleGame();
  });

  links.addEventListener("mousedown", (e) => {
    e.stopPropagation();
  });
});
