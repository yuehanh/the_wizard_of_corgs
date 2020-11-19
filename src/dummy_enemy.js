import { Enemy } from "./enemies";
import { Vector } from "./vector";

export class DummyEnemy extends Enemy {
  constructor(attr) {
    const dummyAttr = {
      level: 1,
      game: attr.game,
    };
    super(dummyAttr);
    this.pos = new Vector(attr.game.width / 2 - this.size / 2, 150);
    this.vel = new Vector(0, 0);
    this.value = 0;
  }
}
