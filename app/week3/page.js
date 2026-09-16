import Dog from "./dog";
export default function Page() {
  const dog1 = {
    name: "Max",
    age: 2,
    breed: "Golden",
    color: "Golden",
  };
  const dog2 = {
    name: "ABC",
    age: 3,
    breed: "CCCC",
    color: "Black and Brown",
  };
  const dog3 = {
    name: "DEF",
    age: 4,
    breed: "DDDD",
    color: "White and Brown",
  };
  return (
    <main>
      <h1 className="text-4xl text-red-500">Week 3 - Components and Props</h1>
      <h2 className="text-3xl text-blue-600">Dogs Information</h2>
      <Dog dog={dog1} />
      <Dog dog={dog2} />
      <Dog dog={dog3} />
      <Dog dog={{name: "EEEE", age: 5, breed: "RRRR", color: "Green"}} />
      
    </main>
  );
}
