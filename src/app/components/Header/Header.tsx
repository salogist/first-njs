import React from "react";
import Link from "next/link";

function NaviHead(){
    return(
        <header className="flex flex-row items-center justify-between gap-9 p-8 pb-20">
        <h1 className="text-2xl font-bold">FGB</h1>
        <nav className="flex flex-row items-center justify-center gap-9">
          <Link href="/" className="text-blue-500">Home</Link>
          <Link href="/shop" className="text-blue-500">Shop</Link>
          <Link href="/about-us" className="text-blue-500">About Us</Link>
        </nav>
        <div className="flex flex-row items-center justify-between gap-9">
        <Link href="/signin" className="bg-blue-500 rounded-xl px-4 py-1">singin</Link>
        <Link href="/login" className="bg-blue-500 rounded-xl px-4 py-1">login</Link>
        </div>
      </header>
    )
}

export default NaviHead;