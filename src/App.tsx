import React from 'react';
import './App.css';

type TitleProps = {
  name: string;
  description?: string;
};

// interface TitleProps {
//   name: string;
//   description?: string;
// }

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
    <ShoppingList name="Aaron" />
  </div>
);

export default App;
