import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "./Header.css";

const heroSlides = [
  {
    image: "iheader_img4.png",
    title: "Order your favourite food here",
    description:
      "Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.",
  },
  {
    image: "iheader_img3.png",
    title: "Delicious Meals Anytime",
    description:
      "We bring you the best flavors, fresh ingredients, and expert cooking, delivered to your doorstep.",
  },
  {
    image: "iheader_img2.png",
    title: "Fast & Reliable Delivery",
    description:
      "Enjoy your favorite dishes with fast and reliable delivery straight to your home.",
  },
];

const Header = () => {
  return (
    <div className="header">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        speed={1000} 
        slidesPerView={1}
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="slide"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="header-contents">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <button>View Menu</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Header;
