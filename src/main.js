import { Command } from "./command";

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const bound = canvas.getBoundingClientRect();
  canvas.width = bound.width;
  canvas.height = bound.height;
  const ctx = canvas.getContext("2d");
  const command = new Command(canvas);
});
