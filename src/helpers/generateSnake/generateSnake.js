import './generateSnake.css';
import move from '../move/move';

const generateSnake = (snakePos, feed) => {
  let snakeBody = [
    document.querySelector(`[posx='${snakePos[0]}'][posy='${snakePos[1]}']`),
    document.querySelector(`[posx='${snakePos[0] - 1}'][posy='${snakePos[1]}']`),
    document.querySelector(`[posx='${snakePos[0] - 2}'][posy='${snakePos[1]}']`),
  ];

  for (let i = 0; i < snakeBody.length; i++) {
    if (snakeBody[i]) {
      snakeBody[i].classList.add('snakeBody');
    }
  }
  if (snakeBody[0]) {
    snakeBody[0].classList.add('snakeHead');
  }
if (snakeBody[0]) {
  let interval = setInterval(move, 400, { snakeBody, feed });
}
}
export default generateSnake;
