"use client";
import { RiMenuLine, RiHeartLine } from "@remixicon/react";
import { useState } from "react";

export default function Header() {
  const [isShowDrop, setShowDrop] = useState(false);
  const toggleHeader = () => {
    setShowDrop(!isShowDrop);
  };
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
        <RiHeartLine className="cursor-pointer" />
      </nav>
      <nav className="w-[90%] flex flex-row items-center justify-between md:hidden">
        <span className="text-[30px] font-bold">Exclusve</span>
        <div className="md:hidden">
          <RiMenuLine onClick={toggleHeader} />
        </div>
      </nav>
      {isShowDrop && (
        <div className="flex w-full justify-around absolute top-20 p-4 bg-white border-b-[1px] md:hidden">
          <span className="hover:underline cursor-pointer">Home</span>
          <span className="hover:underline cursor-pointer">Contact</span>
          <span className="hover:underline cursor-pointer">About</span>
          <span className="hover:underline cursor-pointer">Sign Up</span>
        </div>
      )}
    </header>
  );
}
