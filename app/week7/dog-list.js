import Dog from "./dog";

export default function DogList({ dogs, onDeleteDog }) {
  console.log(dogs);
  return (
    <div>
      <h2 className="text-xl font-bold text-red-600">Dog List</h2>
      {dogs.map((dog) => (
        <Dog
          key={dog.id}
          name={dog.name}
          age={dog.age}
          onDelete={() => onDeleteDog(dog.id)}
        />
      ))}
    </div>
  );
}
