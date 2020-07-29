const canvas = document.getElementById('snake');
const context = canvas.getContext("2d");
const box = 32;

const snake = [];
const direction = 'right';

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

function startGame() {
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