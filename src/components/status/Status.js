import { useSelector, useDispatch } from 'react-redux';
import {
  changeStatus,
  moveSnake,
  setDirection,
  checkFood,
  checkGameOver,
} from '../../slice/gameSlice.js';
import UpdateUser from '../../api/updateUser/UpdateUser.js';
import FindUserByName from '../../api/findUserByName/findUserByName.js';

import './status.css';

import { useRef } from 'react';

const Status = () => {
  const status = useSelector(store => store.game.status);
  const currentSpeed = useSelector(store => store.game.speed);
  const currentPoints = useSelector(store => store.game.points);
  const dispatch = useDispatch();

  let timer = useRef(null);
  const update = () => {
    dispatch(moveSnake());
    dispatch(setDirection());
    dispatch(checkFood());
    dispatch(checkGameOver());
  };

  const startTimer = () => {
    timer.current = setInterval(() => update(), 400 - currentSpeed * 50);
  };
  const stopTimer = () => clearInterval(timer.current);

  const clickHandler = async () => {
    if (status === 'Restart') {
      const user = localStorage.getItem('user_name');
      const currentUser = await FindUserByName(user);
      await UpdateUser(currentUser.id, null, null, currentPoints);
      localStorage.removeItem('user_name');
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
