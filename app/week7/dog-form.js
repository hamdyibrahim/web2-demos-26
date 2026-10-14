"use client";

import { useState } from "react";

export default function DogForm({ onAddDog }) {
  // create a dog state for managing a dog object (id, name, age).
  const [dog, setDog] = useState({ id: null, name: "", age: 0 });

  /* Create handleSubmit() that
     1- prevent the default behavior of form submission
     2- Display the dog to the console
     3- Update/re-initialize the dog state to reset the form after submission 
     */
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 10000);
    // Another way is finding the max id in the dogs then add 1 to it

    //console.log(dog);
    onAddDog({ ...dog, id });
    setDog({ id: null, name: "", age: 0 });
  };

  // Create handleNameChange() to update the name property in dog state
  const handleNameChange = (e) => {
    setDog({ ...dog, name: e.target.value });
  };

  // Create handleAgeChange() to update the age property in dog state
  const handleAgeChange = (e) => {
    //setDog({...dog, age: parseInt(e.target.value, 10) || 0})
    setDog({ ...dog, age: parseInt(e.target.value) });
  };

  return (
    <div>
      <h2>Dog Form</h2>
      <form onSubmit={handleSubmit}>
        <h2>Add a Dog</h2>
        <label>
          Name:
          <input
            type="text"
            value={dog.name}
            onChange={handleNameChange}
            className="border-2 m-2"
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            value={dog.age}
            onChange={handleAgeChange}
            className="border-2 m-2"
          />
        </label>
        <button type="submit" className="border-2">
          Submit
        </button>
      </form>
    </div>
  );
}
