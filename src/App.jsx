import { useState } from 'react';
import CounterDisplay from './components/CounterDisplay.jsx';
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
        <CounterDisplay count={count} />
        <button onClick={increment}>Inrement</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </>
  );
}

export default App;
