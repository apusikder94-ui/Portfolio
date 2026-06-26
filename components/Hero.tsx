import React from "react";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { AuroraText } from "@/components/ui/aurora-text";
import heroImage from "@/public/hero.jpeg";
import Image from "next/image";

const Hero = () => {
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
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Hi, I’m Apu Sikder 👋
            </h1>

            <AuroraText className="text-3xl md:text-4xl font-semibold">
              A passionate Full Stack Web Developer.
            </AuroraText>

            <p className="text-gray-300 font-medium">
              I build modern, responsive, and user-friendly web applications using React, Next.js, Node.js, and MongoDB.
            </p>

            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl">
              Hire Me
            </button>
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