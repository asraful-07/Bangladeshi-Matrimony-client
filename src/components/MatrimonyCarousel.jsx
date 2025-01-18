import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const MatrimonyCarousel = () => {
  const testimonials = [
    {
      id: 1,
      image: "https://i.ibb.co/9VNq2Vf/images2.jpg",
      title: "Redwanul & Minar's swift journey",
      description:
        "Md Redwanul Islam faced challenges finding a life partner until a friend suggested Bangladeshi Matrimony.",
    },
    {
      id: 2,
      image: "https://i.ibb.co/JQDcNGb/images7png.jpg",
      title: "Nazmul & Farhana's inspiring story",
      description:
        "Nazmul and Farhana connected through Bangladeshi Matrimony and began a beautiful journey together.",
    },
    {
      id: 3,
      image: "https://i.ibb.co/Pc4rXYS/images5.jpg",
      title: "Kamal & Jannat's heartwarming tale",
      description:
        "Kamal and Jannat found their forever partner through Bangladeshi Matrimony.",
    },
    {
      id: 4,
      image: "https://i.ibb.co/hYbfyqg/images4.jpg",
      title: "Amin & Yasmin's perfect match",
      description:
        "Amin and Yasmin turned their dreams into reality with the help of Bangladeshi Matrimony.",
    },
    {
      id: 5,
      image: "https://i.ibb.co/FXdTyB2/images3.jpg",
      title: "Tariq & Nasrin's romantic journey",
      description:
        "Tariq and Nasrin started a new chapter in life, thanks to Bangladeshi Matrimony.",
    },
    {
      id: 6,
      image: "https://i.ibb.co/J7vmWB9/images8.jpg",
      title: "Musa & Fatima's love story",
      description:
        "Musa and Fatima’s love story began with Bangladeshi Matrimony and continues to grow stronger.",
    },
  ];

  return (
    <section className="bg-gray-50 py-10 mt-24">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Bangladeshi Matrimony - The No.1 Choice for Finding Your Life Partner
      </h2>
      <div className="container mx-auto px-6">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          className="rounded-lg shadow-lg"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full md:w-1/2 object-cover"
                />
                <div className="p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <a
                    href="#"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MatrimonyCarousel;
