"use client";

import Link from "next/link";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center w-full bg-violet-500 p-4">
    <div className="text-white font-bold">Logo</div>
    <div className="space-x-6">
      <Link href={"/"} className="text-white">Home</Link >
      <Link href={"/about"} className="text-white">About</Link >
      <Link href={"/contact"} className="text-white">Contact</Link >
      <Link href={"/service"} className="text-white">Service</Link >
    </div>
  </div>
    )
}
export default Navbar;