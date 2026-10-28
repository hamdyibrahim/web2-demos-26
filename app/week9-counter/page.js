"use client";
import { useCounter } from "./use-counter";

export default function Page() {
  const { count, increment, decrement } = useCounter(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button className="border mr-2 p-1" onClick={increment}>
        Increment
      </button>
      <button className="border p-1" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}
