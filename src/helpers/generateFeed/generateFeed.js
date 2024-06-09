import './generateFeed.css';
import generatePosition from '../generatePosition/generatePosition';

const generateFeed = feedPos => {
  let feedBody = [document.querySelector(`[posx='${feedPos[0]}'][posy='${feedPos[1]}']`)];
  while (feedBody[0] && feedBody[0].classList.contains('snakeBody')) {
    const [posXF, posYF] = generatePosition();
    feedBody = [document.querySelector(`[posx='${posXF}'][posy='${posYF}']`)];
  }
   if (feedBody[0]) {
    feedBody[0].classList.add('feedBody');
  }
  return feedBody[0];
};

export default generateFeed;
