"use client";

import DogList from "./dog-list";
import DogForm from "./dog-form";
import dogData from "./dogs.json";

import { useState } from "react";

export default function Page() {
  const [dogs, setDogs] = useState(dogData);

  const handleAddDog = (dog) => {
    setDogs([...dogs, dog]);
  };
 const handleDeleteDog = (id) => {
setDogs(dogs.filter((dog) => dog.id != id))
 };
  return (
    <main>
      <h1 className="text-2xl font-bold">Week 7 - Lifting State Demo</h1>
      <h2 className="text-xl font-bold">Dog Data Management</h2>
      <DogForm onAddDog={handleAddDog} />
      <DogList dogs={dogs} onDeleteDog={handleDeleteDog}/>
    </main>
  );
}
