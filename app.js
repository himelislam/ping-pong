const gameContainer = document.querySelector("#gameContainer");
const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const resetBtn = document.querySelector("#resetBtn");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "forestgreen";
const paddle1Color = "lightblue";
const paddle2Color = "red";
const paddleBorder = "black";
const ballColor = "yellow";
const ballBorderColor = "black";
const ballRadius = 12.5;
const paddleSpeed = 50;

let intervalID;
let ballSpeed = 1;