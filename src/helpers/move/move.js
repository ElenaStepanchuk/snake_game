import collision from '../colision/collision';

let direction = 'right';
window.addEventListener('keydown', e => {
  if (e.keyCode === 37 && direction !== 'right') {
    direction = 'left';
  } else if (e.keyCode === 38 && direction !== 'down') {
    direction = 'up';
  } else if (e.keyCode === 39 && direction !== 'left') {
    direction = 'right';
  } else if (e.keyCode === 40 && direction !== 'up') {
    direction = 'down';
  }
});

const move = ({ snakeBody, feedBody }) => {
 
  if (snakeBody && snakeBody[0]) {
    const snakeHead = snakeBody[0];
    const snakeCoordinates = [snakeHead.getAttribute('posx'), snakeHead.getAttribute('posy')];

    if (snakeCoordinates[0] && snakeCoordinates[1]) {
      snakeHead.classList.remove('snakeHead');

      const snakeTail = snakeBody[snakeBody.length - 1];
      if (snakeTail) {
        snakeTail.classList.remove('snakeBody');
      }
      snakeBody.pop();

      let newHead;
      if (direction === 'right') {
        if (snakeCoordinates[0] < 10) {
          newHead = document.querySelector(
            `[posx='${parseInt(snakeCoordinates[0]) + 1}'][posy='${snakeCoordinates[1]}']`,
          );
        } else {
          newHead = document.querySelector(`[posx='1'][posy='${snakeCoordinates[1]}']`);
        }
      } else if (direction === 'left') {
        if (snakeCoordinates[0] > 1) {
          newHead = document.querySelector(
            `[posx='${parseInt(snakeCoordinates[0]) - 1}'][posy='${snakeCoordinates[1]}']`,
          );
        } else {
          newHead = document.querySelector(`[posx='10'][posy='${snakeCoordinates[1]}']`);
        }
      } else if (direction === 'up') {
        if (snakeCoordinates[1] < 10) {
          newHead = document.querySelector(
            `[posx='${snakeCoordinates[0]}'][posy='${parseInt(snakeCoordinates[1]) + 1}']`,
          );
        } else {
          newHead = document.querySelector(`[posx='${snakeCoordinates[0]}'][posy='1']`);
        }
      } else if (direction === 'down') {
        if (snakeCoordinates[1] > 1) {
          newHead = document.querySelector(
            `[posx='${snakeCoordinates[0]}'][posy='${parseInt(snakeCoordinates[1]) - 1}']`,
          );
        } else {
          newHead = document.querySelector(`[posx='${snakeCoordinates[0]}'][posy='10']`);
        }
      }

      if (newHead) {
        snakeBody.unshift(newHead);
      }

      if(snakeBody[0].classList.contains('snakeBody')){
         alert("Game end");
         localStorage.removeItem("user");
         localStorage.removeItem("game");
      }

      if (snakeBody[0]) {
        snakeBody[0].classList.add('snakeHead');
      }

      for (let i = 0; i < snakeBody.length; i++) {
        if (snakeBody[i]) {
          snakeBody[i].classList.add('snakeBody');
        }
      }
    }
    collision({ snakeBody, feedBody });
  }
};

export default move;
