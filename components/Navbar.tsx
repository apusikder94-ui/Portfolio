"use client";

import { IMenu } from "@/type/type";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const menu: IMenu[] = [
  { id: 1, name: "Home" },
  { id: 2, name: "About" },
  { id: 3, name: "Skills" },
  { id: 4, name: "Projects" },
  { id: 5, name: "Contact" },
  { id: 6, name: "Footer" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleScroll = (section: string) => {
    const element = document.getElementById(section.toLowerCase());

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h2 className="text-2xl font-bold text-white cursor-pointer">
          Apu
        </h2>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menu.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.name)}
              className="text-gray-200 hover:text-blue-500 transition duration-300"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black/95 overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          {menu.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.name)}
              className="text-white hover:text-blue-500 transition duration-300 text-lg"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;