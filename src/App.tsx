import React from 'react';
// import logo from "./logo.svg";
import './App.css';

// type TitleProps = {
//   name: string;
// };

interface TitleProps {
  name: string;
  description?: string;
}

const Title: React.FC<TitleProps> = ({ name, description }) => (
  <h1>
    {name}
    ,
    {description}
  </h1>
);

const App: React.FC = () => (
  <div>
    <Title name="Aaron" />
    <Title name="Aaron" description="My Description" />
  </div>
);

export default App;
