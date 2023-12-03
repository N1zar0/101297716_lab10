import React, { useState, useEffect } from 'react';
import store from './store';
import { increment, decrement } from './reducer';

function App() {
  const [count, setCount] = useState(store.getState().counter.count);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setCount(store.getState().counter.count);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleIncrement = () => {
    store.dispatch(increment());
  };

  const handleDecrement = () => {
    store.dispatch(decrement());
  };

  return (
    <div>
      <h1>Lab 10</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default App;
