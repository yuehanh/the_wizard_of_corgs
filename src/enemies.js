import { HealthBar } from "./health_bar";
import { Vector } from "./vector";

export class Enemy {
  constructor(game) {
    this.health = ["hBar"];
    this.body = document.createElement("monster");
    this.healthBar = document.createElement("healthbar");
    document.body.appendChild(this.body);
    this.game = game;
    this.body.appendChild(this.healthBar);
    this.size = 20;
    this.pos = new Vector(40, 40);
    this.width = 20;
    this.height = 40;
    this.healthBar = new HealthBar(this);
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.rect(this.pos.x, this.pos.y, this.width, this.height);
    ctx.fillStyle = "red";
    ctx.fill();
    this.drawHealth(ctx);
  }

  drawHealth(ctx) {
    this.healthBar.draw(ctx);
  }

  update(direction) {
    debugger;
    if (direction === this.health[0]) {
      this.health = this.health.slice(1);
    }
    if (this.health.length === 0) {
      this.remove();
    }
  }

  remove() {
    debugger;
    this.game.remove(this);
  }
}
