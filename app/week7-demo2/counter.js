"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    // Increment the state multiple times by calling setCount(count + 1) multiple times - Incorrect
    /*
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    */
    // Correct way: call setCount((c) => c + 1)increment by passing a function with previous count
    // as a parameter to setCount
    setCount((count) => count + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);

    console.log("Count: " + count);
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
