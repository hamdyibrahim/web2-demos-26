"use client";
import { useState, useEffect } from "react";

export default function Page() {
  const [randomDog, setRandomDog] = useState("");
  const [breeds, setBreeds] = useState([]);

  async function fetchRandomDog(breed) {
    const response =
      breed && breed != "Random Breed"
        ? await fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        : await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    //console.log(data);
    return data.message; //URL of a random dog
  }

  const loadRandomDog = async () => {
    const newRandomDog = await fetchRandomDog();
    setRandomDog(newRandomDog);
  };

  async function fetchBreeds() {
    const response = await fetch(" https://dog.ceo/api/breeds/list/all");
    const data = await response.json();

    return Object.keys(data.message); //URL of a random dog
  }

  const loadBreeds = async () => {
    const breedList = await fetchBreeds();
    //setRandomDog(breeds);
    setBreeds(["Random Breed", ...breedList]);
  };

  const handleBreedChange = async (event) => {
    const selectedBreed = event.target.value;
    const newRandomDog = await fetchRandomDog(selectedBreed);
    setRandomDog(newRandomDog);
  };

  useEffect(() => {
    loadRandomDog();
    loadBreeds();
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-600">
        Week 8 - Fetching Data
      </h1>
      <select onChange={handleBreedChange}>
        {breeds.map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
      {randomDog && (
        <img
          src={randomDog}
          alt="Random Dog"
          className="w-60 h-60 rounded-2xl"
        />
      )}
    </div>
  );
}
