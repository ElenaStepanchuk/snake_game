const generatePosition = () => {
  const posX = Math.round(Math.random() * (10 - 3) + 3);
  const posY = Math.round(Math.random() * (10 - 1) + 1);
  return [posX, posY];
};

export default generatePosition;
