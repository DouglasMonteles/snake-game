const canvas = document.getElementById('snake');
const context = canvas.getContext("2d");
const box = 32;
const snake = [];

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

handleBG();
handleSnake();
