"use client";
import { useState } from "react";

export default function DogForm() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    let dog = { name, breed, age };
    console.log(dog);
  };

  const handleNameChange = (e) => {
    let newName = e.target.value;
    if (newName.length > 0) {
      setName(e.target.value);
    }
  };

  const handleBreedChange = (e) => {
    let newBreed = e.target.value;

    setBreed(newBreed.toUpperCase());
  };

  const handleAgeChange = (e) => {
    let newAge = e.target.value;
    let newAgeNum = parseInt(newAge);
    if (newAgeNum >= 0) {
      setAge(newAgeNum);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => handleNameChange(e)}
        />

        <label htmlFor="breed">Breed:</label>
        <input
          type="text"
          id="breed"
          value={breed}
          onChange={(e) => handleBreedChange(e)}
        />

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => handleAgeChange(e)}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        {name.length === 10 && (
          <p>Name must be exactly 10 characters or less</p>
        )}
        {name.length > 0 && <p>Dog Name is {name}</p>}
        {breed.length > 0 && <p>Dog breed is {breed}</p>}
        {age > 0 && (
          <p>
            Dog age is {age} {age === 1 ? "year" : "years"}
          </p>
        )}
      </div>
    </div>
  );
}
