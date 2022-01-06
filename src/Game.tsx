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

const calculateWinner = (squares: string[]) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i += 1) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const Board: React.FC = () => {
  const [squares, setSquares] = useState<string[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  const handleClick = (i: number) => {
    const temp = squares.slice();
    if (calculateWinner(temp) || temp[i]) {
      return;
    }

    temp[i] = xIsNext ? 'X' : 'O';
    setSquares(temp);
    setXIsNext(!xIsNext);
  };
  const renderSquare = (i: number) => <Square value={squares[i]} onClick={() => handleClick(i)} />;

  const winner = calculateWinner(squares);
  let status: string = '';
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

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
