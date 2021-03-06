export const HealthType = ["hBar", "vBar", "fSlash", "bSlash"];

export class HealthBar {
  constructor(enemy) {
    this.SIZE = 15;
    this.BETWEEN = 3;
    this.GAP = 10;
    this.enemy = enemy;
  }

  draw(ctx) {
    this.update();
    this.enemy.health.forEach((direction, idx) => {
      ctx.lineWidth = 5;

      const directionY = this.y;
      const directionX = this.x + idx * (this.SIZE + this.BETWEEN);
      this.drawDirections(direction, ctx, directionX, directionY);
    });
  }

  update() {
    this.width = this.enemy.health.length * this.SIZE;
    this.height = this.SIZE;
    this.y = this.enemy.pos.y - this.GAP - this.SIZE;
    this.x = this.enemy.pos.x + this.enemy.size / 2 - this.width / 2;
  }
  // x, y will always be the top left corner of the draw box

  drawDirections(direction, ctx, x, y) {
    switch (direction) {
      case "vBar":
        this.drawVBar(ctx, x, y);
        break;
      case "hBar":
        this.drawHBar(ctx, x, y);
        break;
      case "fSlash":
        this.drawFSlash(ctx, x, y);
        break;
      case "bSlash":
        this.drawBSlash(ctx, x, y);
        break;
      default:
        return;
    }
  }
  drawVBar(ctx, x, y) {
    const xStart = x + this.SIZE / 2;
    const yStart = y;
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.moveTo(xStart, yStart);
    ctx.lineTo(xStart, yStart + this.SIZE);
    ctx.stroke();
  }

  drawHBar(ctx, x, y) {
    const xStart = x;
    const yStart = y + this.SIZE / 2;
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.moveTo(xStart, yStart);
    ctx.lineTo(xStart + this.SIZE, yStart);
    ctx.stroke();
  }

  drawFSlash(ctx, x, y) {
    const xStart = x + (this.SIZE * 3) / 4;
    const yStart = y;
    ctx.beginPath();
    ctx.strokeStyle = "gold";
    ctx.moveTo(xStart, yStart);
    ctx.lineTo(xStart - this.SIZE / 2, yStart + this.SIZE);
    ctx.stroke();
  }

  drawBSlash(ctx, x, y) {
    const xStart = x + this.SIZE / 4;
    const yStart = y;
    ctx.beginPath();
    ctx.strokeStyle = "cyan";
    ctx.moveTo(xStart, yStart);
    ctx.lineTo(xStart + this.SIZE / 2, yStart + this.SIZE);
    ctx.stroke();
  }
}
