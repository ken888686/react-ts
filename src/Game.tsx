import React, { useState } from 'react';
import './Game.css';

const Square: React.FC<{value: number|string, onClick: ()=> void}> = ({ value, onClick }) => (
  <button
    type="button"
    className="square"
    onClick={onClick}
  >
    {value}
  </button>
);

const Board: React.FC = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i: number) => {
    const temp = squares.slice();
    temp[i] = xIsNext ? 'X' : 'O';
    setSquares(temp);
    setXIsNext(!xIsNext);
  };
  const renderSquare = (i: number) => <Square value={squares[i]} onClick={() => handleClick(i)} />;

  const status: string = `Next player: ${xIsNext ? 'X' : 'O'}`;
  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

const Game: React.FC = () => (
  <div className="game">
    <div className="game-board">
      <Board />
    </div>
    <div className="game-info">
      <div>{/* status */}</div>
      <ol>{/* TODO */}</ol>
    </div>
  </div>
);

export default Game;
