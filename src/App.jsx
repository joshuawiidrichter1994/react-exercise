import { useState } from 'react';
import CounterDisplay from './components/CounterDisplay.jsx';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [thankYouMessage, setThankYouMessage] = useState('');

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);
  const reset = () => setCount(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trimEnd()) {
      setThankYouMessage(`${name}, thanks for using the counter!`);
    } else {
      setThankYouMessage('');
    }
  };

  return (
    <>
      <div className="card">
        <CounterDisplay count={count} />
        <button onClick={increment}>Inrement</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Submit name</button>
          <h1>{thankYouMessage}</h1>
        </form>
      </div>
    </>
  );
}

export default App;
