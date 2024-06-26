import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col gap-7 items-center">
      <h1 className="text-4xl font-bold">Quiz App!</h1>
      <Link href="/quiz" className=" primary__btn">
        Start Quiz
      </Link>
    </main>
  );
}
