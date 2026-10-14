"use client";

import { useState } from "react";

export default function Person() {
  // Create a person state that contains an object (name, age)
  const [person, setPerson] = useState({ name: "Maria", age: 31 });

  // Define a inc_ag () for incrementing the age property of person state
  const inc_age = () => {
    setPerson({ ...person, age: person.age + 1 });
  };

  return (
    <div>
      <h2 className="text-xl font-bold">Name: {person.name}</h2>
      <p>Age: {person.age}</p>
      <button className="rounded bg-slate-300 font-bold p-4" onClick={inc_age}>
        Increment Age
      </button>
    </div>
  );
}
