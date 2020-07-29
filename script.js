const canvas = document.getElementById('snake');
const context = canvas.getContext("2d");
const box = 32;

const snake = [];
var direction = 'right';

snake[0] = {
  x: 8 * box,
  y: 8 * box,
};

function handleBG() {
  context.fillStyle = 'lightgreen';
  context.fillRect(0, 0, 16 * box, 16 * box);
}

function handleSnake() {
  snake.map(it => {
    context.fillStyle = 'green';
    context.fillRect(it.x, it.y, box, box);
  });
}

document.addEventListener('keydown', update);

function update(event) {
  if (event.keyCode === 37 && direction !== 'right') { // 37 is the code for left
    direction = 'left';
  }

  if (event.keyCode === 38 && direction !== 'up') { // 38 is the code for up
    direction = 'down';
  }

  if (event.keyCode === 39 && direction !== 'left') { // 39 is the code for right
    direction = 'right';
  }

  if (event.keyCode === 40 && direction !== 'down') { // 40 is the code for down
    direction = 'up';
  }
}

function startGame() {
  if (snake[0].x > 15 * box && direction === 'right') {
    snake[0].x = 0;
  }

  if (snake[0].x < 0 && direction === 'left') {
    snake[0].x = 16 * box;
  }

  if (snake[0].y > 15 * box && direction === 'up') {
    snake[0].y = 0;
  }

  if (snake[0].y < 0 && direction === 'down') {
    snake[0].y = 16 * box;
  }

  handleBG();
  handleSnake();

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if (direction === 'right') {
    snakeX += box;
  }

  if (direction === 'left') {
    snakeX -= box;
  }

  if (direction === 'up') {
    snakeY += box;
  }

  if (direction === 'down') {
    snakeY -= box;
  }

  snake.pop();

  let newHead = {
    x: snakeX,
    y: snakeY,
  };

  snake.unshift(newHead);
}

const jogo = setInterval(startGame, 100);