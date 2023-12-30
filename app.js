const gameContainer = document.querySelector("#gameContainer");
const gameBoard = document.getElementById("gameBoard");
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
let ballX = gameWidth / 2;
let ballY = gameHeight / 2;
let ballXDirection = 0;
let ballyDirection = 0;
let player1Score = 0;
let player2Score = 0;

let paddle1 = {
    width : 25,
    height : 100,
    x : 0,
    y : 0
}

let paddle2 = {
    width : 25,
    height : 100,
    x : gameWidth - 25,
    y : gameWidth - 100
}

window.addEventListener("Keydown", changeDirection);
resetBtn.addEventListener("click", resetGame);

gameStart();
drawPaddles();
changeDirection();

function gameStart(){
    createBall();
    nextTick();
};

function nextTick(){
    intervalID = setTimeout(() => {
        clearBoard();
        drawPaddles();
        moveBall();
        drawBall(ballX, ballY);
        checkCollision();
        nextTick();
    },10)
};

function clearBoard(){
    ctx.fillStyle = boardBackground;
    ctx.fillRect(0,0,gameWidth, gameHeight);
};
function drawPaddles(){
    ctx.strokeStyle = paddleBorder;
    
    ctx.fillStyle = paddle1Color;
    ctx.fillRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
    ctx.strokeRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
    
    ctx.fillStyle = paddle2Color;
    ctx.fillRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
    ctx.strokeRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
};
function createBall(){};
function moveBall(){};
function drawBall(){};
function checkCollision(){};
function changeDirection(event){
    const keyPressed = event.which;
    console.log(keyPressed);
};
function updateScore(){};
function resetGame(){};