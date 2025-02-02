import React from "react";

const TechnicalSkill = () => {
  // Define your skills data
  const skills = [
    { name: "HTML", progress: "80%" },
    { name: "CSS", progress: "75%" },
    { name: "Bootstrap", progress: "70%" },
    { name: "JavaScript", progress: "85%" },
    { name: "React.js", progress: "90%" },
    { name: "Java", progress: "80%" },
    { name: "MongoDB", progress: "65%" },
    { name: "Express.js", progress: "70%" },
    { name: "Node.js", progress: "75%" },
  ];

  return (
    <div className="bg-[#07374a] py-8 px-6 rounded-lg w-full max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">
        Technical Skills
      </h1>
      <div className="skills-bar">
        {skills.map((skill, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between mb-2 text-white">
              <span className="text-lg font-semibold">{skill.name}</span>
              <span className="text-lg font-semibold">{skill.progress}</span>
            </div>
            <div className="h-2 bg-gray-600 w-full rounded-full relative">
              <div
                className="h-full bg-blue-400 rounded-full"
                style={{ width: skill.progress }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        {/* <p>
          <a
            href="#my-works"
            className="text-blue-300 hover:text-blue-500 font-semibold"
          >
            Check out my work <i className="fas fa-arrow-down"></i>
          </a>
        </p> */}
      </div>
    </div>
  );
};

export default TechnicalSkill;
