import React from "react";
import Link from "next/link";

function NaviHead(){
    return(
        <header className="flex flex-row items-center justify-between gap-9 p-8 pb-20 bg-white">
        <h1 className="text-2xl font-bold">OVO</h1>
        <nav className="flex flex-row items-center justify-center gap-9">
          <ul className="flex flex-row items-center justify-center gap-9">
            <li><Link href="/" className="text-black">Home</Link></li>
            <li><Link href="/" className="text-black">About Us</Link></li>
            <li><Link href="/" className="text-black">Contact Us</Link></li>
            <li><Link href="/" className="text-black">Blogs</Link></li>
          </ul>
        </nav>
        <div className="flex flex-row items-center justify-between gap-9">
        <Link href="/signin" className="bg-black rounded-xl px-5 py-1 text-white">singin</Link>
        <Link href="/login" className="bg-black rounded-xl px-5 py-1 text-white">login</Link>
        </div>
      </header>
    )
}

export default NaviHead;