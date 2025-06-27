"use strict";
import { GameAsset } from "./GameAsset.js";
class GameCanvas extends GameAsset {
  constructor(canvasElement) {
    super();
    this.element = canvasElement;
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
}

export { GameCanvas };
