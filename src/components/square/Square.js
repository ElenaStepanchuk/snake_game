import { useSelector } from 'react-redux';
import './square.css';
const Square = ({ square }) => {
  const { x, y } = square;
  const snake = useSelector(store => store.game.snake);
  const food = useSelector(store => store.game.food);
  let buttonStyle = '';
  for (let s of snake) {
    if (s.x === x && s.y === y) {
      buttonStyle = 'snake';
    }
  }

  if (x === food.x && y === food.y) buttonStyle = 'food';

  return (
    <span className="square">
      <div className={buttonStyle}></div>
    </span>
  );
};

export default Square;
