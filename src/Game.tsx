import React, { useState } from 'react';
import './Game.css';

type SquareProps={
  value: number|string,
  onClick: ()=> void
}
const Square: React.FC<SquareProps> = (props) => (
  <button
    type="button"
    className="square"
    onClick={props.onClick}
  >
    {props.value}
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
const Board: React.FC<BoardProps> = (props) => {
  const renderSquare = (i: number) => <Square value={props.squares[i]} onClick={() => props.onClick(i)} />;
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

type GameState={
  history: {squares: string[]}[],
  xIsNext: boolean
}
const Game: React.FC = () => {
  const [state, setState] = useState<GameState>(
    {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      xIsNext: true,
    },
  );

  const { history } = state;
  const current = history[history.length - 1];
  const winner = calculateWinner(current.squares);
  let status: string = '';
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next Player: ${state.xIsNext ? 'X' : 'O'}`;
  }

  const handleClick = (i: number) => {
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = state.xIsNext ? 'X' : 'O';
    setState({
      history: history.concat([{
        squares,
      }]),
      xIsNext: !state.xIsNext,
    });
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
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
};

export default Game;
