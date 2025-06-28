"use strict";
class GameAsset {
  gridSize = 20;
}

class Drawer {
  static drawRect({
    context,
    x = 0,
    y = 0,
    width = 20,
    height = 20,
    fill = true,
    stroke = true,
    fillStyle = "grey",
    strokeStyle = "whitesmoke",
  } = {}) {
    if (fill) {
      context.fillStyle = fillStyle;
      context.fillRect(x, y, width, height);
    }
    if (stroke) {
      context.strokeStyle = strokeStyle;
      context.strokeRect(x, y, width, height);
    }
  }
}
export { GameAsset, Drawer };
