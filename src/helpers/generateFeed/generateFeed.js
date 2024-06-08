import './generateFeed.css';

const generateFeed = feedPos => {
  let feedBody = [document.querySelector(`[posx='${feedPos[0]}'][posy='${feedPos[1]}']`)];
  while (feedBody[0] && feedBody[0].classList.contains('snakeBody')) {
    feedBody = [document.querySelector(`[posx='${feedPos[0]}'][posy='${feedPos[1]}']`)];
  }

  if (feedBody[0]) {
    feedBody[0].classList.add('feedBody');
  }
};

export default generateFeed;
