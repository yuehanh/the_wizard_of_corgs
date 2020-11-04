export class Enemy {
  constructor() {
    this.health = ["hBar", "vBar", "/", "\\"];
    this.body = document.createElement("monster");
    this.healthBar = document.createElement("healthbar");
    document.body.appendChild(this.body);
    this.body.appendChild(this.healthBar);
    this.drawHealth();
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
