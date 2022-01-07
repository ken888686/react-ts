import React, { useState, useContext } from 'react';
import './App.scss';
import AuthContext from './AuthContext';

const Counter:React.FC = () => {
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="container">
      <h1>{count}</h1>
      <button
        type="button"
        onClick={() => {
          clickHandler();
        }}
      >
        Click
      </button>
    </div>
  );
};

const App: React.FC = () => {
  const ctx = useContext(AuthContext);

  return (
    <div>
      <Counter />
      {ctx.isLoggedIn}
    </div>
  );
};

export default App;
