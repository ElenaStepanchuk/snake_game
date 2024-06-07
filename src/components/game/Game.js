import React, { useState, useEffect } from 'react';

import './game.css';
import Cells from '../cells/Cells';
import generateSnake from '../../helpers/generateSnake/generateSnake';
import generateSnakePosition from '../../helpers/generateSnakePosition/generateSnakePosition';

const Game = () => {
  const [snakePos, setSnakePos] = useState([1, 1]);

  useEffect(() => {
    const [posX, posY] = generateSnakePosition();
    setSnakePos([posX, posY]);
  }, []);

  generateSnake(snakePos);
  return (
    <div className="field">
      <Cells />
    </div>
  );
};

export default Game;
