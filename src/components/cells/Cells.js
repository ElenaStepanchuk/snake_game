import './cells.css';

const Cells = () => {
  const cells = [];
  let x = 0;
  let y = 10;
  for (let i = 0; i < 100; i++) {
    x++;
    if (x > 10) {
      x = 1;
      y--;
    }
    cells.push(<div key={i} className="cell" posx={x} posy={y}></div>);
  }

  return cells;
};

export default Cells;
