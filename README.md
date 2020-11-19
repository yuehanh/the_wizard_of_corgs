# The Wizard of Corgs

[![github-pages-icon](https://img.shields.io/badge/Hosted%20On-GitHub%20Pages-blue?)](https://yuehanh.github.io/the_wizard_of_corgs/)
![javascript-icon](https://img.shields.io/badge/Built%20With-JavaScript-yellow)

## Background and Overview

[The Wizard of Corgs Live Demo](https://yuehanh.github.io/the_wizard_of_corgs/)
The wizard of corgs is a game where player can conjure spell with their mouse gesture to defend the evil spirites of the forest.
When the game starts, the play can draw patterns in the browser that matches the "health pattern" of the enemy to eliminate them.

## Technologies Used

- Vanilla JavaScript
- Canvas API

## Features

### Capture and display mouse gesture in real time

Mouse gestures are captured in real time when the player held down a single mouse key and move the mouse around. The gesture is then displayed on a temporary canvas on top of the game canvas to provide instance pattern feed back to the player. The gesture will be captured if and only if the mouse movement is greater than a certain threshold to eliminate noise. Furthermore, each complete gesture will be broken down to a combination of linear vectors called direction.

```js
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
```

Each linear gesture vector is then passed through an interpretation algorithm `vectorDirectionsInSymbol` to determine the basic direction as shown in the below code snippet

```js
export const vectorDirectionsInSymbol = function (x, y) {
  const THRESHOLD = 12.5;
  const degree = vectorDirectionInDegree(x, y);

  switch (true) {
    case Math.abs(degree) < THRESHOLD:
      return "R";

    case Math.abs(degree - 180) < THRESHOLD:
      return "L";

    //revsered U and D since the 0,0 for canvas is at top left
    case Math.abs(degree - 90) < THRESHOLD:
      return "D";

    case Math.abs(degree - 270) < THRESHOLD:
    case Math.abs(degree + 90) < THRESHOLD:
      return "U";

    case degree < THRESHOLD && degree > THRESHOLD - 90:
      return "URS";
    case degree < 180 - THRESHOLD && degree > THRESHOLD + 90:
      return "DLS";
    case degree > 270 - THRESHOLD && degree > THRESHOLD + 180:
      return "ULS";
    case degree < 90 - THRESHOLD && degree > THRESHOLD:
      return "DRS";
    default:
      return "not detected";
  }
};
```

The basic 8 directions can be determined by the angle of the gesture vector.

- Right
- Left
- Up
- Down
- To upper left corner
- To upper right corner
- To lower left corner
- To lower right corner

The combination of these 8 directions can later be passed to a command interpreter to capture and recognize more complex gestures such as V, Z, "lightning", "heart" which will be implemented in the future.

```js
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
```

---

### Feel free to send me an <a href="mailto:yuehan.huang@protonmail.com">message</a>!
