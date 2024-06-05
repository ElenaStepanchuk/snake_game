import { useState } from 'react';
import './enter.css';

const Enter = () => {
  const [name, setName] = useState('');

  const handleInputChange = event => {
    const { value } = event.target;
    setName(value);
  };
  const startGame = event => {
    event.preventDefault();
    console.log('name:', name);
    setName('');
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
        <button className="form_button" type="submit" onClick={startGame}>
          Enter game
        </button>
      </form>
    </div>
  );
};

export default Enter;
