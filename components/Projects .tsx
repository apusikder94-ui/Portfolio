import React from "react";

const projects = [
  {
    title: "Social Media Platform",
    description:
      "Full Stack Social Media Application with Authentication, Posts, Comments, Likes, Profile Management and Redux Toolkit.",
    tech: ["Next.js", "Node.js", "Express.js", "MongoDB", "Redux Toolkit"],
    link: "https://social-media-2-0-sooty.vercel.app",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full Stack E-Commerce Website with Admin Dashboard, Product Management, Cart, Orders and Payment Integration.",
    tech: ["Next.js", "Node.js", "MongoDB", "Redux Toolkit", "Stripe"],
    link: "https://e-commmerch2-0.vercel.app",
  },
  {
    title: "Restaurant Landing Page",
    description:
      "Modern and responsive restaurant landing page built with React and Tailwind CSS.",
    tech: ["React.js", "Tailwind CSS"],
    link: "https://restaurant-landing-page-blue.vercel.app/",
  },
  {
    title: "Travel Landing Page",
    description:
      "Beautiful travel website landing page with responsive design and modern UI.",
    tech: ["React.js", "Tailwind CSS"],
    link: "https://travel-landing-page-six-chi.vercel.app/",
  },
  {
    title: "Online Course Landing Page",
    description:
      "Educational platform landing page with responsive and attractive design.",
    tech: ["React.js", "Tailwind CSS"],
    link: "https://onine-course-landing-page.vercel.app/",
  },
  {
    title: "Real Estate Landing Page",
    description:
      "Real estate business landing page showcasing properties and services.",
    tech: ["React.js", "Tailwind CSS"],
    link: "https://real-estate-landing-page-snowy.vercel.app/",
  },
  {
    title: "Gym Landing Page",
    description:
      "Fitness and gym landing page with modern UI and responsive layout.",
    tech: ["React.js", "Tailwind CSS"],
    link: "https://gym-landing-page-omega-hazel.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            My Projects
          </h2>
          <p className="text-gray-400 mt-4">
            Some of my recent works and full-stack applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-105 transition duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-white px-5 py-2 rounded-lg hover:opacity-90"
              >
                Live Demo
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;