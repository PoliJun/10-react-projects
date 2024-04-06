import { useState } from "react";
import "../styles/Counter.scss";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment=() => {
    setCount(count + 1);
  }

  const decrement=() => {
    setCount(count - 1);
  }

  return (
    <section className="counter">
      <div className="container">
        <h1 className="number">{count}</h1>
        <div className="btns-container">
          <button className="increment" onClick={increment}>
            Increment
          </button>
          <button className="decrement" onClick={decrement}>
            Decrement
          </button>
        </div>
      </div>
    </section>
  );
};
export default Counter;
