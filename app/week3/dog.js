export default function Dog ({ dog }){
    const {name, age, breed, color} = dog;
return (
    <section className="bg-slate-300 w-100 mb-4">
        <h2 className="font-bold">{name}</h2>
        <p className="ml-4">Age: {age}</p>
        <p className="ml-4">Breed: {breed}</p>
        <p className="ml-4">Color: {color}</p>
      </section>
)
}