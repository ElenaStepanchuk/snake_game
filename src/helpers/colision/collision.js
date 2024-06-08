// import generateFeed from '../generateFeed/generateFeed';
import generatePosition from '../../helpers/generatePosition/generatePosition';

const collision = ({ snakeBody, feedBody }) => {
  if (
    snakeBody &&
    feedBody &&
    snakeBody[0] &&
    feedBody[0] &&
    snakeBody[0].getAttribute('posx') === feedBody[0].getAttribute('posx') &&
    snakeBody[0].getAttribute('posy') === feedBody[0].getAttribute('posy')
  ) {
    feedBody[0].classList.remove('feedBody');

    let x = snakeBody[snakeBody.length - 1].getAttribute('posx');
    let y = snakeBody[snakeBody.length - 1].getAttribute('posy');
    snakeBody.push(document.querySelector(`[posx='${x}'][posy='${y}']`));

    // const [posXF, posYF] = generatePosition();
    // generateFeed([posXF, posYF]);
    let newPosition = generatePosition();
    console.log('newPosition:', newPosition);
  }

  if (snakeBody[0]) {
    snakeBody[0].classList.add('snakeHead');
  }

  for (let i = 0; i < snakeBody.length; i++) {
    if (snakeBody[i]) {
      snakeBody[i].classList.add('snakeBody');
    }
  }
};

export default collision;
