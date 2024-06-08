import React, { useState, useEffect } from 'react';

import './game.css';
import Cells from '../cells/Cells';
import generateSnake from '../../helpers/generateSnake/generateSnake';
import generateFeed from '../../helpers/generateFeed/generateFeed';
import generatePosition from '../../helpers/generatePosition/generatePosition';

const Game = () => {
  const [snakePos, setSnakePos] = useState();
  const [feedPos, setFeedPos] = useState();

  useEffect(() => {
    const [posX, posY] = generatePosition();
    setSnakePos([posX, posY]);
    const [posXF, posYF] = generatePosition();
    setFeedPos([posXF, posYF]);
  }, []);

  useEffect(() => {
    if ((snakePos, feedPos)) {
      generateSnake(snakePos, feedPos);
      generateFeed(feedPos);
    }
  }, [snakePos, feedPos]);

  return (
    <div className="field">
      <Cells />
    </div>
  );
};

export default Game;
