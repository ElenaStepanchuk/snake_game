import { useSelector } from 'react-redux';

import Square from '../square/Square';
import './board.css';

const Board = () => {
  let squares = [];
  const pointsFood = useSelector(store => store.game.points);
  const currentSpeed = useSelector(store => store.game.speed);

  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      squares.push({ x, y, index: '' + x + y });
    }
  }

  return (
    <>
      <div className="points_container">
        <p className="points">Points: {pointsFood}</p>
        <p className="points">Speed: {currentSpeed}</p>
      </div>
      <div className="board">
        {squares.map(square => {
          return (
            <span key={square.index}>
              <Square square={square} />
            </span>
          );
        })}
      </div>
    </>
  );
};

export default Board;
