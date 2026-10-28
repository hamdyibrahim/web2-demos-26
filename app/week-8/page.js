"use client";

import { useState, useEffect } from "react";

export default function Page() {
  const [randDog, setRandDog] = useState(null);
  const [breeds, setBreeds] = useState([]);

  async function fetchRandomDog(breed) {
    const response =
      breed && breed != "Random Breed"
        ? await fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        : await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    return data.message;
  }

  async function fetchBreeds() {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    return Object.keys(data.message);
  }

  const loadRandomDog = async () => {
    const newRandomDog = await fetchRandomDog();
    setRandDog(newRandomDog);
  };

  const loadBreeds = async () => {
    const breedList = await fetchBreeds();
    setBreeds(["Random Breed", ...breedList]);
  };

  const handleBreedChange = async (event) => {
    const selectedBreed = event.target.value;
    const newRandomDog = await fetchRandomDog(selectedBreed);
    setRandDog(newRandomDog);
  };

  useEffect(() => {
    loadRandomDog();
    loadBreeds();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-red-500">
        Week 8 - Fetching Data
      </h1>
      <select onChange={handleBreedChange}>
        {breeds.map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
      <img src={randDog} alt="Random Dog" className="w-64 h-64 rounded-lg" />
    </div>
  );
}


