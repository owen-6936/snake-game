"use strict";
import { GameAsset, Drawer } from "./GameAsset.js";
class GameCanvas extends GameAsset {
  constructor(canvasElement, canvasBgColor) {
    super();
    this.element = canvasElement;
    this.canvasBgColor =
      canvasBgColor ||
      getComputedStyle(document.documentElement)
        .getPropertyValue("--color-bg-medium")
        .trim();
  }
  get context() {
    return this.element.getContext("2d");
  }

  get width() {
    return this.element.width;
  }

  set width(newWidth) {
    this.element.width = newWidth;
  }
  get height() {
    return this.element.height;
  }

  set height(newHeight) {
    this.element.height = newHeight;
  }

  paint() {
    Drawer.drawRect({
      x: 0,
      y: 0,
      context: this.context,
      fillStyle: this.canvasBgColor,
      stroke: false,
      width: this.width,
      height: this.height,
    });
  }
}

export { GameCanvas };
