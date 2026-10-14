"use client";

import { useState } from "react";

export default function Counter() {
  // Create a state for count with 0 initial value
  const [count, setCount] = useState(0);

  const increment = () => {
    // incrementing the state using setter
    setCount(count + 1);
    // log count
    console.log(count);
  };

  return (
    <div>
      <h2 className="text-xl font-bold">React State Based Counter</h2>
      <p>Count: {count}</p>
      <button
        className="rounded bg-slate-300 font-bold p-4"
        onClick={increment}
      >
        Increment
      </button>
    </div>
  );
}
