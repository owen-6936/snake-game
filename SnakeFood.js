"use strict";
import { GameAsset, Drawer } from "./GameAsset.js";
class SnakeFood extends GameAsset {
  constructor({
    canvasElement,
    snakeFoodColor,
    snakeFoodBorderColor,
    initialPlacement,
  } = {}) {
    super();
    this._element = canvasElement;
    this.snakeFoodColor =
      snakeFoodColor ||
      getComputedStyle(document.documentElement)
        .getPropertyValue("--color-food-fill")
        .trim();
    this.snakeFoodBorderColor =
      snakeFoodBorderColor ||
      getComputedStyle(document.documentElement)
        .getPropertyValue("--color-food-stroke")
        .trim();
    this._placement = initialPlacement || { x: 9, y: 7 };
  }
  randomPlacement() {
    const gridPerRowOrColumn = this._element?.width / this.gridSize || 15;
    this._placement.x = Math.floor(Math.random() * gridPerRowOrColumn);
    this._placement.y = Math.floor(Math.random() * gridPerRowOrColumn);
  }
  reAlignPlacement(gridOffset) {
    this._placement.x += gridOffset;
    this._placement.y += gridOffset;
  }
  paint(context) {
    Drawer.drawRect({
      context,
      x: this._placement.x * this.gridSize,
      y: this._placement.y * this.gridSize,
      strokeStyle: this.snakeFoodBorderColor,
      fillStyle: this.snakeFoodColor,
    });
  }
}

export { SnakeFood };
