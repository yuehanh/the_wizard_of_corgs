export class Vector {
  constructor(x, y) {
    this.x = x || 0;
    this.y = y || 0;
  }

  set(x, y) {
    this.x = x;
    this.y = y;
  }
  add(vector) {
    this.x += vector.x;
    this.y += vector.y;
  }
  minus(vector) {
    this.x -= vector.x;
    this.y -= vector.y;
  }

  reverse(vector) {
    this.x = -vector.x;
    this.y = -vector.y;
  }
}
