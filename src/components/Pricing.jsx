import React from "react";
import { SiTicktick } from "react-icons/si";
import SectionHeading from "./SectionHeading";
const Pricing = () => {
  const plans = [
    {
      name: "Basic Plan",
      price: "$100",
      features: [
        "Access to gym facilities during regular operating hours.",
        "Use of cardio and strength training equipment.",
        "Access to locker rooms and showers.",
        
      ],
    },
    {
      name: "Standard Plan",
      price: "$200",
      features: [
        "All benefits of the basic membership.",
        "Access to group fitness classes such as yoga, spinning, and Zumba.",
        "Use of additional amenities like a sauna or steam room.",
        
      ],
      popular: true,
    },
    {
      name: "Premium Plan",
      price: "$300",
      features: [
        "All benefits of the standard membership.",
        "Access to personal training sessions with certified trainers.",
        "Discounts on additional services such as massage therapy or nutrition counseling.",
        
      ],
    },
  ];

  return (
    <>
    <div className="pt-5 lg:py-10 ">
    <SectionHeading heading="Choose Your Perfect Plan" subHeading='Flexible pricing options designed to fit your needs. Get started today!' />
        <div className="py-16 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-11/12 max-w-6xl">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`border-4 border-gray-700 py-16 px-8 rounded-lg text-white relative ${
              plan.popular ? "border-orange-500" : ""
            }`}
          >
            {plan.popular && (
              <span className="absolute top-3 right-3 bg-orange-500 text-xs font-semibold px-2 py-1 text-black rounded">
                POPULAR
              </span>
            )}
            <h2 className="text-xl font-bold mb-4">{plan.name}</h2>
            <p className="text-4xl font-bold text-orange-500">{plan.price}</p>
            <p className="text-sm text-gray-400">/ MONTH</p>
            <button className="mt-4 bg-orange-500 text-white py-2 px-4 w-full rounded hover:bg-orange-600">
              Get Started
            </button>
            <ul className="mt-6 space-y-2 text-gray-300 text-sm">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex py-3 text-xl items-center gap-2">
                <SiTicktick className="text-orange-500 text-xl" />{feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </div>
    
    </>
  );
};

export default Pricing;
