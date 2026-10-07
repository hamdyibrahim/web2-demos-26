"use client";

import { useState } from "react";

//read JSON data
import dogsData from "./dogs.json";

export default function Page() {
  const [selectedDogId, setSelectedDogId] = useState(null);

  // create a copy of dogsData
  let dogsCopy = [...dogsData];

  /*dogsCopy.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    } else {
      return 0;
    }
  });*/

  //localeCompare
  dogsCopy.sort((a, b) => a.name.localeCompare(b.name));

  // filter()
  //let filtered = dogsCopy.filter((dog) => dog.id >= 2);
  // handleClick(id)
  const handleClick = (id) => {
    if (selectedDogId == id) {
      setSelectedDogId(null);
    } else {
      setSelectedDogId(id);
    }
  };
  return (
    <main>
      <h1 className="text-2xl font-bold">Week 6 - Dogs Data</h1>
      <ul>
        {dogsCopy.map((dog) => (
          <li
            key={dog.id}
            onClick={() => handleClick(dog.id)}
            className={`m-2 cursor-pointer lg:max-w-lg ${selectedDogId == dog.id ? "bg-slate-500" : "bg-slate-300"}`}
          >
            <div className="flex">
              <img
                className="w-24 h-24 rounded-full"
                src={dog.imageurl}
                alt={dog.name}
              />
              <div clasName="ml-4">
                <h2 className="text-xl font-bold">{dog.name} </h2>
                <p className="text-blue-950">{dog.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {selectedDogId && <p>A dog {selectedDogId} is selected</p>}
    </main>
  );
}
