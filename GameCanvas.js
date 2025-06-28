"use strict";
import { GameAsset, Drawer } from "./GameAsset.js";
class GameCanvas extends GameAsset {
  constructor({ canvasElement, canvasBgColor, viewPorts }) {
    super();
    this.element = canvasElement;
    this.canvasBgColor =
      canvasBgColor ||
      getComputedStyle(document.documentElement)
        .getPropertyValue("--color-bg-medium")
        .trim();
    this.viewPorts = viewPorts || {
      small: [0, 480],
      medium: [480, 768],
      large: [768],
    };
    this._sizes = {
      small: 300,
      medium: 420,
      large: 620,
    };
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

  get parentWidth() {
    return this.element.parentElement.clientWidth;
  }

  get parentHeight() {
    return this.element.parentElement.clientHeight;
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
  resize() {
    let parentDimension = Math.min(this.parentWidth, this.parentHeight);
    let preViousDimension = Math.min(this.width, this.height);
    let targetSize;

    if (parentDimension >= this.viewPorts.large[0]) {
      targetSize = this._sizes.large;
    } else if (
      parentDimension >= this.viewPorts.medium[0] &&
      parentDimension < this.viewPorts.large[0]
    ) {
      targetSize = this._sizes.medium;
    } else {
      targetSize = this._sizes.small;
    }
    this.width = targetSize;
    this.height = targetSize;
    return [preViousDimension, targetSize];
  }
}

export { GameCanvas };
