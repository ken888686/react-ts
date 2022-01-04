import React from "react";
// import logo from "./logo.svg";
import "./App.css";

// type TitleProps = {
//   name: string;
// };

interface TitleProps {
  name: string;
}
interface TitleProps {
  description: string;
}

const Title: React.FC<TitleProps> = ({ name, description }) => {
  return (
    <h1>
      {name}, {description}
    </h1>
  );
};

const App: React.FC = () => {
  return (
    <div>
      <Title name="Aaron" description="..." />
    </div>
  );
};

export default App;
