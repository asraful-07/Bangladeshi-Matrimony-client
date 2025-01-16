import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const testimonials = [
  {
    id: 1,
    name: "Jack Daniel",
    location: "New York",
    image: "https://via.placeholder.com/80",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    name: "Emily Watson",
    location: "Los Angeles",
    image: "https://via.placeholder.com/80",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 3,
    name: "Sophia Smith",
    location: "Chicago",
    image: "https://via.placeholder.com/80",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const App = () => {
  return (
    <div className="bg-[#faf4ef] py-10">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          768: { slidesPerView: 2 },
          480: { slidesPerView: 1 },
        }}
        className="mySwiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-white p-6 rounded-xl shadow-lg relative text-center">
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full border-4 border-orange-300"
                />
              </div>
              <h3 className="mt-10 font-bold text-lg">{testimonial.name}</h3>
              <p className="text-sm text-gray-500 mt-2">
                {testimonial.message}
              </p>
              <span className="text-xs text-gray-400 mt-2 block">
                {testimonial.location}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default App;
