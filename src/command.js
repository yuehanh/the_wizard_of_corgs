export class Command {
  constructor(pathStyle) {
    this.threshhold = 10;
    this.canvas = canvas;

    this.directions = [];
    this.isMouseDown = false;

    this.lineWidth = pathStyle.lineWidth || 5;
    this.strokeStyle = pathStyle.strokeStyle || "red";

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
  }

  handleMouseDown(e) {
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

      let dx, dy, direction;

      dx = Math.abs(this.xCurrent - this.xLast);
      dy = Math.abs(this.yCurrent - this.yLast);

      if (dx < this.threshhold && dy < this.threshhold) return;

      if (dx > dy) {
        direction = this.xCurrent > this.xLast ? "R" : "L";
      } else {
        direction = this.yCurrent > this.yLast ? "D" : "U";
      }

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
      this.executeDirections();
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

  executeDirections() {
    switch (this.directions.join("")) {
      case "R":
        console.log("Right");
        break;
      case "L":
        console.log("Left");
        break;
      case "U":
        console.log("up");
        break;
      case "D":
        console.log("down");
        break;
      default:
        console.log(this.directions.join(""));
    }
  }
}
