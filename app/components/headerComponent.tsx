"use client";
import { RiMenuLine, RiShoppingCartLine } from "@remixicon/react";

export default function Header() {
  return (
    <header className="w-[100vw] px-4 py-4 border-b-[1px] border-gray flex justify-center">
      <nav className="hidden md:flex w-[90%] flex-row items-center justify-between">
        <span className="text-[30px] font-bold">Exclusive</span>
        <div className="flex gap-x-[80px]">
          <span className="hover:underline cursor-pointer">Home</span>
          <span className="hover:underline cursor-pointer">Contact</span>
          <span className="hover:underline cursor-pointer">About</span>
          <span className="hover:underline cursor-pointer">Sign Up</span>
        </div>
        <RiShoppingCartLine className="cursor-pointer" />
      </nav>
      <nav className="w-[90%] flex flex-row items-center justify-between md:hidden">
        <span className="text-[30px] font-bold">Exclusive</span>
        <div className="md:hidden">
          <RiMenuLine />
        </div>
      </nav>
    </header>
  );
}
