// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Carousel() {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          // Breakpoints for responsive design
          320: {
            slidesPerView: 1, // Mobile: Show 1 slide
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        }}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://img.freepik.com/premium-photo/bride-puts-wedding-ring-finger-groom-wedding-details_105751-4871.jpg?ga=GA1.1.107419408.1733399733&semt=ais_hybrid"
              alt="Matrimony System"
              className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-pink-500 text-lg md:text-2xl lg:text-4xl font-bold text-center px-4">
                Find Your Perfect Match with Our Matrimony System
              </h2>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://img.freepik.com/free-photo/romantic-couple-city-celebrating-engagement-together_23-2149488118.jpg?ga=GA1.1.107419408.1733399733&semt=ais_hybrid"
              alt="Couple Engagement"
              className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-pink-500 text-lg md:text-2xl lg:text-4xl font-bold text-center px-4">
                Manage Your Matrimonial Journey with Ease
              </h2>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://img.freepik.com/premium-photo/groom-wears-ring-bride_199620-1176.jpg?ga=GA1.1.107419408.1733399733&semt=ais_hybrid"
              alt="Marriage Registration"
              className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-pink-500 text-lg md:text-2xl lg:text-4xl font-bold text-center px-4">
                Join, Connect, and Celebrate Your Journey
              </h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
