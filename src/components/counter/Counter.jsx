import { useEffect } from "react";
import { useState } from "react";

const Counter = ({ stock, initial = 1, onAdd }) => {
  const [counter, setCounter] = useState(initial);
  useEffect(() => {
    setCounter(initial);
  }, [initial]);
  const increment = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const decrement = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <h2>{counter}</h2>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={() => onAdd(counter)}>agregar al carrito</button>
    </div>
  );
};

export default Counter;
