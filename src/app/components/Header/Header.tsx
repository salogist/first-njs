import React from "react";
import Link from "next/link";

function NaviHead(){
    return(
        <header className="flex flex-row items-center justify-between gap-9 p-8 bg-white">
        <h1 className="text-2xl font-bold text-black">OVO</h1>
        <nav className="flex flex-row items-center justify-center gap-4">
          <ul className="flex flex-row items-center justify-center gap-10">
            <li><Link href="/" className="text-black">Home</Link></li>
            <li><Link href="/about-us" className="text-black">About Us</Link></li>
            <li><Link href="/contact-us" className="text-black">Contact Us</Link></li>
            <li><Link href="/services" className="text-black">services</Link></li>
          </ul>
        </nav>
        <div className="flex flex-row items-center justify-between gap-4">
        <Link href="/signin" className="bg-black rounded-md px-5 py-1 text-white">singin</Link>
        <Link href="/login" className="bg-black rounded-md px-5 py-1 text-white">login</Link>
        </div>
      </header>
    )
}

export default NaviHead;