import Link from "next/link";
export default function Page() {
  return (
    <main>
      <h1 className="text-3xl font-bold text-blue-600">Web 2 Demos</h1>
      <p>Click one of the following links</p>
      <Link href="week2" className="text-underline text-blue-400">
        Go to Week 2
      </Link>
    </main>
  );
}
