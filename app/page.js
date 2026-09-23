import Link from "next/link";
export default function Page() {
  const weeks = [2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <main>
      <h1 className="text-3xl font-bold text-blue-600">Web 2 Demos</h1>
      <p>Click one of the following links</p>

      {weeks.map((week) => (
        <div key={week}>
          <Link href={`week${week}`} className="font-bold text-xl">
            Week {week}
          </Link>
        </div>
      ))}
    </main>
  );
}
