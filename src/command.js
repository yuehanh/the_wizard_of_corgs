import { Enemy } from "./enemies";
import { vectorDirectionsInSymbol } from "./util";

export class Command {
  constructor(canvas, game, pathStyle = {}) {
    this.threshhold = 10;
    this.canvas = canvas;
    this.game = game;
    this.directions = [];
    this.isMouseDown = false;
    this.tmpCanvas = null;

    this.lineWidth = pathStyle.lineWidth || 5;
    this.strokeStyle = pathStyle.strokeStyle || "red";
    this.muteBtn = document.getElementById("mute-btn");
    this.addInputListener();
  }

  addInputListener() {
    document.addEventListener("mousedown", (e) => {
      e.preventDefault();
      this.handleMouseDown(e);
    });
    document.addEventListener("mousemove", (e) => {
      e.preventDefault();
      this.handleMouseMove(e);
    });
    document.addEventListener("mouseup", (e) => {
      e.preventDefault();
      this.handleMouseUp(e);
    });
    this.canvas.oncontextmenu = function (e) {
      e.preventDefault();
    };
  }

  handleMouseDown(e) {
    if (this.isMouseDown) {
      if (this.tmpCanvas !== null) {
        document.body.removeChild(this.tmpCanvas);
        this.tmpCanvas = null;
      }
    }
    this.isMouseDown = true;
    this.tmpCanvas = document.createElement("canvas");
    this.ctx = this.tmpCanvas.getContext("2d");
    this.tmpCanvas.width = window.innerWidth || window.clientWidth;
    this.tmpCanvas.height = window.innerHeight || window.clientHeight;
    this.tmpCanvas.style =
      "position: fixed; left: 0; right: 0; top: 0; bottom: 0;";
    document.body.appendChild(this.tmpCanvas);

    const mousePos = this.calibrateInput(e, this.tmpCanvas);
    this.xStart = mousePos.x;
    this.yStart = mousePos.y;
    this.xLast = mousePos.x;
    this.yLast = mousePos.y;

    //starting position of visible path
    this.ctx.beginPath();
    this.ctx.moveTo(this.xStart, this.yStart);
  }

  handleMouseMove(e) {
    if (this.isMouseDown) {
      const mousePos = this.calibrateInput(e, this.tmpCanvas);
      this.xCurrent = mousePos.x;
      this.yCurrent = mousePos.y;
      this.ctx.lineWidth = this.lineWidth;
      this.ctx.strokeStyle = this.strokeStyle;
      this.ctx.lineTo(this.xCurrent, this.yCurrent);
      this.ctx.stroke();

      const dx = this.xCurrent - this.xLast;
      const dy = this.yCurrent - this.yLast;

      if (Math.abs(dx) < this.threshhold && Math.abs(dy) < this.threshhold)
        return;

      const direction = vectorDirectionsInSymbol(dx, dy);
      const lastDirection = this.directions[this.directions.length - 1];

      if (lastDirection !== direction) {
        this.directions.push(direction);
      }

      this.xLast = this.xCurrent;
      this.yLast = this.yCurrent;
    }
  }

  handleMouseUp() {
    if (this.directions.length !== 0) {
      this.execute();
    }
    this.isMouseDown = false;
    this.directions = [];
    document.body.removeChild(this.tmpCanvas);
    this.tmpCanvas = null;
  }

  calibrateInput(e, canvas) {
    const bound = canvas.getBoundingClientRect();
    return {
      x: ((e.clientX - bound.left) / bound.width) * canvas.width,
      y: ((e.clientY - bound.top) / bound.height) * canvas.height,
    };
  }

  execute() {
    this.game.receiveCommand(this.interpretDirections());
  }

  interpretDirections() {
    switch (this.directions.join()) {
      case "R":
      case "L":
        return "hBar";
      case "U":
      case "D":
        return "vBar";
      case "URS":
      case "DLS":
        return "fSlash";
      case "ULS":
      case "DRS":
        return "bSlash";
    }
  }
}
