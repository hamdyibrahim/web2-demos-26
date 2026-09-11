import Title from "./title";
export default function Page() {
  let a = 10;
  let b = 20;
  return (
    <main>
      <h1 className="text-3xl font-bold text-blue-600">Week 2 Route/Page</h1>
      <p>More content</p>
      <Title />
      <p>
        Sum of {a} and {b} is {a + b}
      </p>
    </main>
  );
}
