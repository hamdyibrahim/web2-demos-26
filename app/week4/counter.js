"use client";
import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    } else {
      alert("You reached the max value of the count");
    }
  };
  return (
    <div>
      <p>Count: {count} </p>
      <button
        onClick={increment}
        disabled={count == 10}
        className="bg-slate-400 p-2 hover:bg-slate-600 text-white active:bg-red-500"
      >
        Increment
      </button>
    </div>
  );
}
