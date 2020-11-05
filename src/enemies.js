import { HealthBar } from "./health_bar";
import { Vector } from "./vector";

export class Enemy {
  constructor() {
    this.health = ["hBar", "vBar", "/", "\\"];
    this.body = document.createElement("monster");
    this.healthBar = document.createElement("healthbar");
    document.body.appendChild(this.body);
    this.body.appendChild(this.healthBar);
    this.size = 20;
    this.pos = new Vector(40, 40);
    this.width = 20;
    this.height = 40;
    this.healthBar = new HealthBar(this);
    this.drawHealth();
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.rect(this.pos.x, this.pos.y, this.width, this.height);
    ctx.fillStyle = "red";
    ctx.fill();
    this.healthBar.draw(ctx);
  }
  drawHealth() {
    this.healthBar.innerHTML = this.health.join(" ");
  }

  update(direction) {
    if (direction === this.health[0]) {
      this.health = this.health.slice(1);
    }
    this.drawHealth();
  }
}
