import './generateSnake.css';
import move from '../move/move';

const generateSnake = (snakePos, feedPos) => {
  const snakeBody = [
    document.querySelector(`[posx='${snakePos[0]}'][posy='${snakePos[1]}']`),
    document.querySelector(`[posx='${snakePos[0] - 1}'][posy='${snakePos[1]}']`),
    document.querySelector(`[posx='${snakePos[0] - 2}'][posy='${snakePos[1]}']`),
  ];
  const feedBody = [document.querySelector(`[posx='${feedPos[0]}'][posy='${feedPos[1]}']`)];
  if (!snakeBody.length || !feedBody.length) return;
  for (let i = 0; i < snakeBody.length; i++) {
    snakeBody[i].classList.add('snakeBody');
  }
  snakeBody[0].classList.add('snakeHead');
  let currentSpeed = localStorage.getItem('speed');
  let currentInterval = 450 - currentSpeed * 50;
  let interval = setInterval(move, currentInterval, { snakeBody, feedBody });
  const gameStart = localStorage.getItem('game');
  if (!gameStart) {
    clearInterval(interval);
  }
};
export default generateSnake;
