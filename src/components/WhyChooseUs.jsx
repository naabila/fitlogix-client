import React from "react";
import { FaCheckSquare } from "react-icons/fa";
import SectionHeading from "./SectionHeading";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Pro Equipment",
      description: "Top-tier gym equipment to enhance your workouts and maximize performance.",
    },
    {
      title: "Certified Trainers",
      description: "Work with expert trainers to achieve your fitness goals effectively.",
    },
    {
      title: "Cardio First",
      description: "Specialized cardio programs to boost stamina and improve heart health.",
    },
    {
      title: "Flexible Time",
      description: "Open 24/7 to fit your busy schedule anytime, anywhere.",
    },
  ];

  return (
    <section className="text-white pb-10 px-4">
      <div className="max-w-6xl mx-auto text-center">
      <SectionHeading heading='Why Choose Us?' subHeading='Achieve your fitness goals with the best facilities and trainers.' />
       

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start border-4 border-gray-700 p-6">
              <FaCheckSquare className="text-orange-500 text-3xl mr-4" />
              <div>
                <h3 className="text-xl text-left font-bold">{feature.title}</h3>
                <p className="text-gray-400 text-left">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
