import React, { useState, useEffect } from 'react';

import './game.css';
import Cells from '../cells/Cells';
import generateSnake from '../../helpers/generateSnake/generateSnake';
import generateFeed from '../../helpers/generateFeed/generateFeed';
import generatePosition from '../../helpers/generatePosition/generatePosition';

const Game = () => {
  const [snakePos, setSnakePos] = useState([1, 1]);
  const [feedPos, setFeedPos] = useState([1, 1]);

  useEffect(() => {
    const [posX, posY] = generatePosition();
    setSnakePos([posX, posY]);
    const [posXF, posYF] = generatePosition();
    setFeedPos([posXF, posYF]);
  }, []);

  generateSnake(snakePos, feedPos);
  generateFeed(feedPos);

  return (
    <div className="field">
      <Cells />
    </div>
  );
};

export default Game;
