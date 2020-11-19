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
  const music = document.getElementById("music");

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

  muteBtn.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      console.log("unmute");
      muteBtn.innerText = "Mute";
    } else {
      music.pause();
      console.log("mute");
      muteBtn.innerText = "Unmute";
    }
  });
  window.muteBtn = muteBtn;
  window.music = music;
});
