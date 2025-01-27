import React from "react";
import { FaDumbbell, FaHeartbeat, FaAppleAlt, FaUserFriends, FaCogs, FaShieldAlt } from "react-icons/fa";
import SectionHeading from "../SectionHeading";
import { Fade } from "react-awesome-reveal";

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaDumbbell className="text-4xl text-orange-500" />,
      title: "Personal Trainer",
      subtitle: "Expert trainers provide personalized workout plans to help you achieve your fitness goals with confidence and efficiency."
    },
    {
      icon: <FaHeartbeat className="text-4xl text-orange-500" />,
      title: "Cardio Programs",
      subtitle: "Engaging cardio routines designed to improve heart health, boost energy levels, and burn calories effectively."
    },
    {
      icon: <FaAppleAlt className="text-4xl text-orange-500" />,
      title: "Healthy Nutrition",
      subtitle: "Comprehensive nutrition plans to fuel your body, support recovery, and promote a healthy, confident lifestyle."
    },
    {
      icon: <FaUserFriends className="text-4xl text-orange-500" />,
      title: "Community Support",
      subtitle: "Join a supportive community to stay motivated, share experiences, and celebrate your fitness journey together."
    },
    {
      icon: <FaCogs className="text-4xl text-orange-500" />,
      title: "Advanced Equipment",
      subtitle: "State-of-the-art equipment designed for safety, durability, and performance to enhance your workout experience."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-orange-500" />,
      title: "Safety First",
      subtitle: "Focus on injury prevention with expert guidance and safe practices, ensuring a secure and effective fitness journey."
    }
  ];

  return (
    <section className=" pt-10 pb-16 px-6 md:px-12">
      <div className="container mx-auto">
        <SectionHeading heading='Our Features' subHeading='Our goal is to make fitness accessible and enjoyable for everyone. Each feature is crafted with care, keeping your progress in mind. From personalized training to innovative nutrition plans, we focus on delivering results.' />
        <Fade>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {features.map((feature, index) => (
            <div
              key={index}

              className="border border-orange-500 rounded-lg p-6 bg-transparent text-white text-center shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.subtitle}</p>
            </div>
          ))}
        </div>
        </Fade>
       
      </div>
    </section>
  );
};

export default FeaturesSection;
