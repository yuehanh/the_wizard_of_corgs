export const vectorDirectionInDegree = (x, y) => {
  let degree = (Math.atan(y / x) * 180) / Math.PI;

  if (x < 0) {
    degree += 180;
  }
  return degree;
};

export const vectorDirectionsInSymbol = (x, y) => {
  const THRESHOLD = 15;
  const degree = vectorDirectionInDegree(x, y);
  console.log(degree);

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
