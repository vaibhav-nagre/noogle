"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";


export default function Footer() {
  const currentYear = new Date().getFullYear();
  const path = usePathname();
  const [tooltip, setTooltip] = useState(false)
  return (
    <div className="bg-dark-purple-300 flex flex-col w-full text-accent-text font-ropaSans justify-center gap-y-4 py-4 relative">
      <div className="flex items-center px-4">
        <div className="cursor-pointer" onMouseEnter={() => setTooltip(!tooltip)} onMouseLeave={() => setTooltip(!setTooltip)} >United States</div>
      </div>

      <div className={`bg-[#15131B] hidden md:${tooltip ? "block" : "hidden"} text-white absolute p-2 rounded-xl px-4 border border-accent-text border-opacity-40 left-[4.5rem] top-2`}>fly me out, haha!</div>

      <div className="border borber-b border-1 border-accent-text" />

      <div className="flex flex-row w-full justify-between px-4">
        <div className="flex flex-row gap-x-6">
          <div className="cursor-pointer">{currentYear} © Vaibhav Nagre</div>
        </div>

        {path == "/search" && (
          <Link
            href="/about"
            className="hover:opacity-70 transform transition-all duration-300"
          >
            About
          </Link>
        )}
      </div>
    </div>
  );
}
