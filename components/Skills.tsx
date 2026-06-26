import React from "react";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", level: "90%" },
      { name: "Next.js", level: "85%" },
      { name: "JavaScript", level: "88%" },
      { name: "Tailwind CSS", level: "92%" },
      { name: "HTML & CSS", level: "95%" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: "85%" },
      { name: "Express.js", level: "80%" },
      { name: "MongoDB", level: "82%" },
      { name: "REST API", level: "88%" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git & GitHub", level: "85%" },
      { name: "VS Code", level: "95%" },
      { name: "Postman", level: "80%" },
      { name: "Redux", level: "78%" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8 text-gray-100">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            My Skills
          </h2>
          <p className="text-gray-400 mt-3">
            Technologies I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skillsData.map((section, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 text-center">
                {section.category}
              </h3>

              <div className="space-y-5">
                {section.skills.map((skill, index) => (
                  <div key={index}>
                    
                    {/* Skill Name */}
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span className="text-sm text-gray-400">
                        {skill.level}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-700 h-2 rounded-full">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: skill.level }}
                      ></div>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;