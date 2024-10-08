import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-500 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h4>hello world</h4>
      <Link className="text-red-500" href={"/blog"}>
        blog
      </Link>
      <h1 className="text-3xl font-bold underline">hello nepal</h1>
      <Link href={"/products"}>Produts</Link>

    </div>
  );
}
