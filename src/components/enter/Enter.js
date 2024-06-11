import React, { useState } from 'react';
import CreateUser from '../../api/createUser/createUser';
import './enter.css';
import { useDispatch } from 'react-redux';
import { playGame } from '../../slice/gameSlice';
import FindUserByName from '../../api/findUserByName/findUserByName';
import UpdateUser from '../../api/updateUser/UpdateUser';

const Enter = () => {
  const [name, setName] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { value } = event.target;
    setName(value);
  };

  const startGame = async e => {
    try {
      e.preventDefault();
      const currentUser = await FindUserByName(name);
      if (currentUser) {
        await UpdateUser(currentUser.id, name, null, 0);
      } else {
        await CreateUser(name);
      }
      localStorage.setItem('user_name', name);
      dispatch(playGame());
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div className="container">
      <form className="form_name" onSubmit={startGame}>
        <input
          value={name}
          type="text"
          placeholder="Enter your name"
          name="name"
          className="input_name"
          onChange={handleInputChange}
        ></input>
        <button className="form_button" type="submit">
          Start game
        </button>
      </form>
    </div>
  );
};

export default Enter;
