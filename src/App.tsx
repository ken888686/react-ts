import React, { useState } from 'react';
import './App.css';

const ShoppingList: React.FC<{name: string}> = ({ name }) => (
  <div className="shopping-list">
    <h1>
      Shopping List for
      {' '}
      {name}
    </h1>
    <ul>
      <li>Instagram</li>
      <li>WhatsApp</li>
      <li>Oculus</li>
    </ul>
  </div>
);

type TitleProps = {
  name: string,
  description?: string
};

// interface TitleProps {
//   name: string;
//   description?: string;
// }
const Title: React.FC<TitleProps> = ({ name, description }) => (
  <h1>
    {name}
    ,
    {description}
  </h1>
);

const Counter:React.FC = () => {
  const [myValue, setMyValue] = useState(0);
  return (
    <div className="container">
      <button type="button" onClick={() => { setMyValue((prev) => prev - 1); }}>-</button>
      {' '}
      <span>{myValue}</span>
      {' '}
      <button type="button" onClick={() => setMyValue((prev) => prev + 1)}>+</button>
      {' '}
      <button type="button" onClick={() => setMyValue(0)}>
        Reset
      </button>
    </div>
  );
};

const Clock:React.FC = () => {
  let time = new Date().toLocaleTimeString('zh-TW');
  const [currentTime, setCurrentTime] = useState(time);

  const updateTime = () => {
    time = new Date().toLocaleTimeString('zh-TW');
    setCurrentTime(time);
  };

  setInterval(updateTime, 1000);

  return (
    <div className="container">
      {currentTime}
    </div>
  );
};

const App: React.FC = () => (
  <div>
    <Clock />
  </div>
);

export default App;
