import { useSelector } from 'react-redux';
import './square.css';
const Square = ({ square }) => {
  const { x, y } = square;
  const snake = useSelector(store => store.game.snake);
  const food = useSelector(store => store.game.food);
  let numberStyle = useSelector(store => store.game.foodStyle);

  let foodColor = '';
  for (let s of snake) {
    if (s.x === x && s.y === y) {
      foodColor = 'snake';
    }
  }

  if (x === food.x && y === food.y) {
    foodColor = `food${numberStyle}`;
  }

  return (
    <span className="square">
      <div className={foodColor}></div>
    </span>
  );
};

export default Square;
