import './generateFeed.css';
import generatePosition from '../generatePosition/generatePosition';

const generateFeed = feedPos => {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  let feedBody = [document.querySelector(`[posx='${feedPos[0]}'][posy='${feedPos[1]}']`)];
  while (feedBody[0] && feedBody[0].classList.contains('snakeBody')) {
    const [posXF, posYF] = generatePosition();
    feedBody = [document.querySelector(`[posx='${posXF}'][posy='${posYF}']`)];
  }
  if (feedBody[0]) {
    if (randomNumber === 1) {
      feedBody[0].classList.add('feedBody1');
      feedBody[0].setAttribute('points', 1);
    }
    if (randomNumber === 2) {
      feedBody[0].classList.add('feedBody2');
      feedBody[0].setAttribute('points', 5);
    }
    if (randomNumber === 3) {
      feedBody[0].classList.add('feedBody3');
      feedBody[0].setAttribute('points', 10);
    }
  }
  return feedBody[0];
};

export default generateFeed;
