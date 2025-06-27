"use strict";
import { GameAsset, Drawer } from "./GameAsset.js";
class Snake extends GameAsset {
  constructor({ snakeHead, snakeColor, snakeBorderColor } = {}) {
    super();
    this.snakeColor =
      snakeColor ||
      getComputedStyle(document.documentElement)
        .getPropertyValue("--color-snake-fill")
        .trim();
    this.snakeBorderColor =
      snakeBorderColor ||
      getComputedStyle(document.documentElement)
        .getPropertyValue("--color-snake-stroke")
        .trim();
    this.bodyParts = [snakeHead];
  }
  get numberOfBodyPart() {
    return this.bodyParts.length;
  }
  addBodypart() {}
  draw(context) {
    for (const part of this.bodyParts) {
      Drawer.drawRect({
        context,
        x: part.x,
        y: part.y,
        strokeStyle: this.snakeBorderColor,
        fillStyle: this.snakeColor,
      });
    }
  }
}
export { Snake };
