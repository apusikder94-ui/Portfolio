"use client";
import Image from "next/image";
import React from "react";
import heroImage from "@/public/hero.jpeg";

const About = () => {
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
    <section id="about" className="bg-black text-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            About <span className="">Me</span>
          </h2>
          <p className="text-gray-400 mt-4 text-sm md:text-base">
            Get to know more about me and my journey
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Image Section */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <Image
              src={heroImage}
              alt="Apu Sikder"
              className="relative rounded-2xl object-cover w-full h-[400px] md:h-[500px]"
            />
          </div>

          {/* Text Section */}
          <div className="space-y-6">

            <h3 className="text-2xl md:text-3xl font-semibold">
              Hi, I’m <span className=" text-gray-100">Apu Sikder</span> 👋
            </h3>

            <p className="text-gray-300 leading-relaxed">
              I am a Full Stack Web Developer who loves building modern web
              applications. I specialize in React, Next.js, Node.js, Express,
              and MongoDB.
            </p>

            <p className="text-gray-300 leading-relaxed">
              I enjoy turning ideas into real projects that are fast,
              responsive, and user-friendly. I always try to write clean and
              maintainable code.
            </p>

            <p className="text-gray-300 leading-relaxed">
              My goal is to become a professional software engineer and work on
              impactful real-world projects, including remote opportunities.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/Apu_Sikder_Resume.docx"
                download="Apu_Sikder_Resume.docx"
                className="px-6 py-2 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition"
              >
                Download CV
              </a>

              <button
              onClick={()=>handleScroll("Contact")}
              className="px-6 py-2 border border-gray-500 rounded-full hover:bg-white hover:text-black transition">
                Contact Me
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;