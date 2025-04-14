import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((num) => num + 1);
  const decrement = () => setCount((num) => num - 1);

  return (
    <>
      <div className="card">
        <button onClick={increment}>Inrement</button>
        <button onClick={decrement}>Decrement</button>
        <span>{count}</span>
      </div>
    </>
  );
}

export default App;
