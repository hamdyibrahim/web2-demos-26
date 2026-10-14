"use client";

export default function Broken_Counter() {
  let count = 0;

  const increment = () => {
    count += 1;
    console.log("Count: " + count);
  };

  return (
    <div>
      <h2 className="text-xl font-bold">Broken Counter</h2>
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
