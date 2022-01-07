import React, {
  useState, useEffect, useRef, forwardRef,
} from 'react';
import './App.scss';

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
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter((prev) => prev + 1);
  }, [myValue]);

  useEffect(() => {
    setTimeout(() => {
      console.log('Hi');
    }, 1000);
    return () => {
      console.log('clearTimeout');
      clearTimeout(1000);
    };
  }, [counter]);

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
      <div className="counter">
        Counter:
        {' '}
        {counter}
      </div>
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

const ChangeColor:React.FC = () => {
  const [count, setCount] = useState(0);
  const [bg, setBg] = useState('pink');
  const [name, setName] = useState('Click Change');

  const bgChange = () => {
    setBg('blue');
    setName('Pink');
    setCount((prev) => prev + 1);
  };

  const bgBack = () => {
    setBg('pink');
    setName('Blue');
    setCount((prev) => prev + 1);
  };

  return (
    <div className="container">
      <button
        type="button"
        onClick={() => (count % 2 === 0 ? bgChange() : bgBack())}
      >
        {name}
      </button>
      <div className="block" style={{ backgroundColor: bg }} />
      <button
        type="button"
        onMouseEnter={bgChange}
        onMouseLeave={bgBack}
      >
        {name}
      </button>
    </div>
  );
};

const GetRef:React.ForwardRefExoticComponent<React.RefAttributes<HTMLHeadingElement>> = forwardRef((props, ref) => {
  console.log(ref);
  return (
    <h1 ref={ref}>Hi</h1>
  );
});

const UseRefDemo:React.FC = () => {
  const h1Ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      console.log(h1Ref.current);
      isFirstRun.current = false;
      return;
    }
    console.log('Effect Done');
  }, []);

  const clickHandler = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="container">
      <h1 ref={h1Ref}>Hi</h1>
      <GetRef ref={h1Ref} />
      <button type="button" onClick={() => { clickHandler(); }}>
        Add:
        {count}
      </button>
    </div>
  );
};

const App: React.FC = () => (
  <div>
    <UseRefDemo />
  </div>
);

export default App;
