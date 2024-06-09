const generatePosition = () => {
  const posX = Math.round(Math.random() * (8 - 2) + 2);
  const posY = Math.round(Math.random() * (8 - 1) + 1);
  return [posX, posY];
};

export default generatePosition;
