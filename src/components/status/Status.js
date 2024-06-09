import { useSelector, useDispatch } from 'react-redux';
import {
  changeStatus,
  moveSnake,
  setDirection,
  checkFood,
  checkGameOver,
} from '../../store/gameSlice';

import './status.css';

import { useRef } from 'react';

const Status = () => {
  const status = useSelector(store => store.game.status);
  const dispatch = useDispatch();

  let timer = useRef(null);
  const update = () => {
    dispatch(moveSnake());
    dispatch(setDirection());
    dispatch(checkFood());
    dispatch(checkGameOver());
  };
  const startTimer = () => {
    timer.current = setInterval(() => update(), 400);
  };
  const stopTimer = () => clearInterval(timer.current);

  const clickHandler = () => {
    if (status === 'Restart') {
      window.location.reload();
      return;
    }
    if (status !== 'Pause') startTimer();
    else stopTimer();
    dispatch(changeStatus());
  };
  return (
    <button className="start_button" onClick={clickHandler}>
      {status}
    </button>
  );
};

export default Status;
