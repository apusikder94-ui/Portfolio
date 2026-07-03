"use client";
import React from "react";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { AuroraText } from "@/components/ui/aurora-text";
import heroImage from "@/public/hero.jpeg";
import Image from "next/image";

const Hero = () => {

  const handleScroll = (section: string) => {
    const element = document.getElementById(section.toLowerCase());

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <div id="home" className="relative h-screen w-full overflow-hidden pt-24">

      {/* Background */}
      <AnimatedGridPattern className="bg-black" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="absolute inset-0 z-10 max-w-7xl mx-auto px-6 md:px-8 text-gray-100 mt-24">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center h-full">

          {/* Text */}
          <div className="space-y-8 md:space-y-12 leading-tight">
            <h1 className="text-4xl md:text-6xl font-bold text-center md:text-start">
              Hi, I’m Apu Sikder
            </h1>

            <h3 className="text-3xl md:text-5xl font-semibold text-blue-700 text-center md:text-start">
              A passionate Full Stack Web Developer.
            </h3>

            <p className="text-gray-300 font-medium text-sm md:text-lg text-center md:text-start">
              I build modern, responsive, and user-friendly web applications using React, Next.js, Node.js, and MongoDB.
            </p>

            <div className="flex justify-center md:justify-start">
              <button onClick={()=>handleScroll("Contact")} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl">
                Hire Me
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center items-center rounded-2xl border">
            <Image
              src={heroImage}
              alt="hero"
              className="rounded-2xl shadow-lg object-contain"
              priority
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;