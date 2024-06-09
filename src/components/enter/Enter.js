import React, { useState } from 'react';
import CreateUser from '../../api/createUser/createUser';
import './enter.css';

const Enter = () => {
  const [name, setName] = useState('');
  
  const handleInputChange = event => {
    const { value } = event.target;
    setName(value);
      };

  const startGame = async () => {
    try {
      const user = await CreateUser(name);
      localStorage.setItem("user", name);
      // setName('');
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
          Enter game
        </button>
      </form>
    </div>
  );
};

export default Enter;
