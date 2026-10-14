import Broken_Counter from "./broken_counter.js";
import Counter from "./counter.js";

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold">Week 7 - Immutability Demo</h1>
      <Broken_Counter />
      <Counter />
    </main>
  );
}
