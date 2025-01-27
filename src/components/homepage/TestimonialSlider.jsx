import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

const TestimonialSlider = ({reviewData}) => {
  

  return (
    <div className=" text-white p-6 rounded-xl">
      <Swiper
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {reviewData.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center text-left space-y-4">
              <p className="text-lg">{testimonial.feedback}</p>
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.userImage}
                  alt="name"
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="text-orange-400 font-bold">{testimonial.userName}</h3>
                  <p className="text-gray-400">Member</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
