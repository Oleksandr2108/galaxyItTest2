"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Img1 from "@/assets/images/image1.jpg";
import Img2 from "@/assets/images/image2.jpg";
import Img3 from "@/assets/images/image3.jpg";
import Img4 from "@/assets/images/image4.jpg";
import Img5 from "@/assets/images/image5.jpg";
import Img6 from "@/assets/images/image6.jpg";
import Img7 from "@/assets/images/image7.jpg";
import Image from "next/image";

import "swiper/css";

const imagesArray = [
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img2,
  Img3,
  Img4,
  Img5,
];

const SwiperImage = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      slidesPerView={7}
      spaceBetween={1}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      speed={8000}
      grabCursor
    >
      {imagesArray.map((item, index) => (
        <SwiperSlide key={index}>
          <Image
            src={item}
            width={300}
            height={300}
            alt=""
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperImage;
