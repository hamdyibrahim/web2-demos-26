//Dog component with 2 props name and age for displaying dog object
export default function Dog({ id, name, age, onDelete }) {
  return (
    <div>
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-xl font-bold">{age}</p>
      <button className="rounded bg-slate-300 font-bold p-4" onClick={ () => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
