import React from "react";
import Link from "next/link";

function NaviHead(){
    return(
        <header className="flex flex-row items-center justify-between gap-9 p-8 bg-white">
        <p className="text-2xl font-bold text-black">دیکــــــاردو</p>
        <nav className="flex flex-row items-center justify-center gap-4">
          <ul className="flex flex-row items-center justify-center gap-10">
            <li><Link href="/" className="text-black">خانه</Link></li>
            <li><Link href="/about-us" className="text-black">درباره ما</Link></li>
            <li><Link href="/contact-us" className="text-black">تماس با ما</Link></li>
            <li><Link href="/posts" className="text-black">مقالات</Link></li>
            <li><Link href="/services" className="text-black">خدمات</Link></li>
          </ul>
        </nav>
        <div className="flex flex-row items-center justify-between gap-4">
        <Link href="/signin" className="bg-black rounded-md px-5 py-2.5 text-white">درخواست مشاوره</Link>
        </div>
      </header>
    )
}

export default NaviHead;