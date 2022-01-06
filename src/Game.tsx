import React, { useState } from 'react';
import './Game.css';

type SquareProps={
  value: number|string,
  onClick: ()=> void
}
const Square: React.FC<SquareProps> = ({ value, onClick }) => (
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

type BoardProps={
  squares: string[],
  onClick: (i: number)=> void
}
const Board: React.FC<BoardProps> = ({ squares, onClick }) => {
  const renderSquare = (i: number) => <Square value={squares[i]} onClick={() => onClick(i)} />;
  return (
    <div>
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

const Game: React.FC = () => {
  const [history, setHistory] = useState<{squares: string[]}[]>([{ squares: Array(9).fill(null) }]);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);
  let status: string = '';
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next Player: ${xIsNext ? 'X' : 'O'}`;
  }

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXIsNext((step % 2) === 0);
  };

  const moves = history.map((step, move) => {
    const desc = move ? `Go to move #${move}` : 'Go to game start';
    return (
      <li key={move}>
        <button type="button" onClick={() => jumpTo(move)}>
          {desc}
        </button>
      </li>
    );
  });

  const handleClick = (i: number) => {
    const historyTemp = history.slice(0, stepNumber + 1);
    const currentTemp = history[history.length - 1];
    const squares = currentTemp.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? 'X' : 'O';
    setHistory(historyTemp.concat([{ squares }]));
    setStepNumber(historyTemp.length);
    setXIsNext(!xIsNext);
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          onClick={(i) => handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default Game;
