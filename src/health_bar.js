export class HealthBar {
  constructor(enemy) {
    this.SIZE = 20;
    this.GAP = 10;
    this.enemy = enemy;
    this.width = enemy.health.length * this.SIZE;
    this.height = this.SIZE;
    this.y = enemy.pos.y - this.GAP - this.SIZE;
    this.x = enemy.pos.x + enemy.width / 2 - this.width / 2;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.stroke();
  }


}
