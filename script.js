"use strict";
import { GameCanvas } from "./GameCanvas.js";
import { Snake } from "./Snake.js";
import { SnakeFood } from "./SnakeFood.js";

function initializeGame() {
  const canvasElement = document.querySelector("#game-canvas");
  /** @type {CanvasRenderingContext2D} */
  const context = canvasElement.getContext("2d");
  const gameCanvas = new GameCanvas(canvasElement);
  const canvasBgColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--color-bg-medium")
    .trim();
  context.fillStyle = canvasBgColor;
  context.fillRect(0, 0, gameCanvas.width, gameCanvas.height);

  const snake = new Snake();
  const snakeFood = new SnakeFood();
}

initializeGame();
