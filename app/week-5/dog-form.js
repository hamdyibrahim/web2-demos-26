"use client";

import { useState } from "react";

export default function DogForm() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState(0);

  // handle submission
  const handleSubmit = (event) => {
    event.preventDefault();
    let dog = { name, breed, age };
    console.log(dog);
  };

  const handleNameChange = (e) => {
    const newName = e.target.value;
    if (newName.length > 10) {
      //alert("Name should not exceed 10");
    } else {
      setName(newName);
    }
  };

  const handleBreedChange = (e) => {
    let newBreed = e.target.value;
    newBreed = newBreed.toUpperCase();
    setBreed(newBreed);
  };

  const handleAgeChange = (e) => {
    let newAge = e.target.value;
    let ageNum = parseInt(newAge);
    if (age >= 0) {
      setAge(ageNum);
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          className="border m-2 p-2"
          value={name}
          onChange={(event) => handleNameChange(event)}
        />

        <label htmlFor="breed">Breed</label>
        <input
          type="text"
          id="breed"
          className="border m-2 p-2"
          value={breed}
          onChange={(event) => handleBreedChange(event)}
        />

        <label htmlFor="age">Age</label>
        <input
          type="text"
          id="age"
          value={age}
          className="border m-2 p-2"
          onChange={(event) => handleAgeChange(event)}
        />
        <button type="submit" className="border m-2 bg-blue-500 text-white p-3 text-l">
          submit
        </button>
      </form>
      <div>
        {name.length === 10 && (
          <p>Name must be exactly 10 characters or less</p>
        )}
        {name.length > 0 && <p>Dog Name is {name}</p>}
        {breed.length > 0 && <p>Dog breed is {breed}</p>}
        {age > 0 && <p>Dog age is {age} {age === 1 ? "year":"years"}</p>}
      </div>
    </section>
  );
}
