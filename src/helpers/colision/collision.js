import generateFeed from '../generateFeed/generateFeed';
import generatePosition from '../../helpers/generatePosition/generatePosition';
import UpdateUser from '../../api/updateUser/UpdateUser';
import FindUserByName from '../../api/findUserByName/findUserByName';

let points = 0;
let speed = 1;
const collision = async ({ snakeBody, feedBody }) => {
  if (
    snakeBody &&
    feedBody &&
    snakeBody[0].getAttribute('posx') === feedBody[0].getAttribute('posx') &&
    snakeBody[0].getAttribute('posy') === feedBody[0].getAttribute('posy')
  ) {
    const currentPoints = parseInt(feedBody[0].getAttribute('points'));
    if ((points + currentPoints) % 50 === 0) {
      speed = speed + 1;
    }

    localStorage.setItem('points', (points = points + currentPoints));

    const user = await FindUserByName(localStorage.getItem('user'));

    await UpdateUser(user.id, undefined, speed, points + currentPoints);

    feedBody[0].removeAttribute('points');
    feedBody[0].classList.remove('feedBody1');
    feedBody[0].classList.remove('feedBody2');
    feedBody[0].classList.remove('feedBody3');

    const newPosition = generatePosition();

    feedBody[0] = generateFeed(newPosition);

    const x = snakeBody[snakeBody.length - 1].getAttribute('posx');
    const y = snakeBody[snakeBody.length - 1].getAttribute('posy');
    snakeBody.push(document.querySelector(`[posx='${x}'][posy='${y}']`));
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
