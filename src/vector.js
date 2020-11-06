export class Vector {
  constructor(x, y) {
    this.x = x || 0;
    this.y = y || 0;
    this.mag = Math.sqrt(x ** 2 + y ** 2);
  }

  set(x, y) {
    this.x = x;
    this.y = y;
  }
  add(vector) {
    return new Vector(vector.x + this.x, vector.y + this.y);
  }
  minus(vector) {
    return new Vector(this.x - vector.x, this.y - vector.y);
  }

  scale(mag) {
    this.x /= this.x / mag;
    this.y /= this.y / mag;
  }
  reverse(vector) {
    this.x = -vector.x;
    this.y = -vector.y;
  }
}
