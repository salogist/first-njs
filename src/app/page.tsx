import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
      <header className="flex flex-row items-center justify-between gap-9 p-8 pb-20">
        <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
        <nav className="flex flex-row items-center justify-between gap-5">
          <Link href="/" className="text-blue-500">Home</Link>
          <Link href="/shop" className="text-blue-500">Shop</Link>
          <Link href="/about-us" className="text-blue-500">About Us</Link>
        </nav>
        <div className="flex flex-row items-center justify-between gap-5">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">Click me</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">Click me</button>
        </div>
      </header>
  );
}
