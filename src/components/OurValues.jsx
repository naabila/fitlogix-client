import React from "react";
import { FaCheckSquare } from "react-icons/fa";

const OurValues = () => {
  const values = [
    {
      title: "Passion",
      description: "We are deeply passionate about fitness and helping people achieve their best selves.",
    },
    {
      title: "Community",
      description: "We foster a supportive and inclusive environment where everyone feels welcome.",
    },
    {
      title: "Commitment",
      description: "Our dedication to your fitness journey ensures continuous progress and motivation.",
    },
    {
      title: "Growth",
      description: "We believe in personal development and pushing limits for continuous improvement.",
    },
    {
      title: "Honesty",
      description: "Integrity and transparency drive our interactions and coaching methods.",
    },
    {
      title: "Teamwork",
      description: "Success is best achieved together. We encourage collaboration and mutual support.",
    },
  ];

  return (
    <section className=" text-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-5">
        {/* Left Side: Heading */}
        <div className="lg:w-2/5 text-center lg:text-left">
          <h4 className="text-gray-400 uppercase tracking-wider">Our Values</h4>
          <h2 className="text-4xl font-bold text-white leading-tight mt-2">
            Lift weights, burn calories, eat clean, repeat
          </h2>
        </div>

        {/* Right Side: Values Grid */}
        <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 lg:mt-0">
          {values.map((value, index) => (
            <div key={index} className="flex items-start">
              <FaCheckSquare className="text-orange-500 text-3xl mr-4" />
              <div>
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
