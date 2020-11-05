import { Vector } from "./vector";

export const vectorDirectionInDegree = function (x, y) {
  let degree = (Math.atan(y / x) * 180) / Math.PI;

  if (x < 0) {
    degree += 180;
  }
  return degree;
};

export const vectorDirectionsInSymbol = function (x, y) {
  const THRESHOLD = 15;
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

export const rndEntryPoint = function (game, enemy) {
  const rndX = Math.random() * (game.width + enemy.width + 1) - enemy.width;
  const rndY = Math.random() * (game.height + 1);
  const choiceArray = [
    new Vector(0 - enemy.width, rndY),
    new Vector(game.width, rndY),
    new Vector(rndX, 0 - enemy.height),
  ];

  const rndIdx = Math.random() * 3;
  return choiceArray[rndIdx];
};
