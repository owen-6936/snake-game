"use strict";
import { Drawer } from "./GameAsset.js";
import { GameCanvas } from "./GameCanvas.js";
import { Snake } from "./Snake.js";
import { SnakeFood } from "./SnakeFood.js";

function initializeGame() {
  const canvasElement = document.querySelector("#game-canvas");
  const gameCanvas = new GameCanvas(canvasElement);
  /** @type {CanvasRenderingContext2D} */
  const context = gameCanvas.context;
  const snake = new Snake({ snakeHead: { x: 140, y: 140 } });
  const snakeFood = new SnakeFood();

  gameCanvas.paint();
  snake.draw(context);
}

initializeGame();
