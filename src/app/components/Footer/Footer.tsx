import Link from "next/link";
function Navifoot() {


  return (
    <footer className="flex flex-row items-center justify-between pb-7 px-8 bg-white">
      <div className="flex flex-row items-center justify-center gap-4">
        <p className="text-sm text-gray-500">هیچوقت برای شروع دیر نیست</p>
      </div>
      <p className="text-sm text-gray-500">Copyright © 2025 Dicardo</p>
      <div className="flex flex-row items-center justify-center gap-4">
        <p className="text-sm text-gray-500">پس زود باش:)</p>
      </div>
    </footer>
  )
}

export default Navifoot;