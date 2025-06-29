"use strict";
import { GameCanvas } from "./GameCanvas.js";
import { Snake } from "./Snake.js";
import { SnakeFood } from "./SnakeFood.js";

function initializeGame() {
  // creates all necessary variables
  const canvasElement = document.querySelector("#game-canvas");
  const gameCanvas = new GameCanvas({ canvasElement });
  /** @type {CanvasRenderingContext2D} */
  const context = gameCanvas.context;
  const initialGridX = Math.floor(gameCanvas.width / gameCanvas.gridSize / 2);
  const initialGridY = Math.floor(gameCanvas.height / gameCanvas.gridSize / 2);
  const snake = new Snake({ snakeHead: { x: initialGridX, y: initialGridY } });
  const snakeFood = new SnakeFood({ canvasElement });
  handleScreenResize();

  function paintGameAssests(context) {
    gameCanvas.paint();
    snake.paint(context);
    snakeFood.paint(context);
  }

  function alignGameAssets() {
    let sizes = gameCanvas.resize();
    /* the current size - previous size / sides to account for gridX 1 + gridY 1 = 2 */
    let pixelOffset = (sizes[1] - sizes[0]) / 2;
    let gridOffset = pixelOffset / gameCanvas.gridSize;
    snake.reAlignBodyParts(gridOffset);
    snakeFood.reAlignPlacement(gridOffset);
  }

  function handleSnakeEatFood() {
    // adding more later
    snakeFood.randomPlacement();
    paintGameAssests(context);
  }

  function handleScreenResize() {
    alignGameAssets();
    paintGameAssests(context);
  }

  // add eventlisteners
  window.addEventListener("resize", handleScreenResize);
}

initializeGame();
