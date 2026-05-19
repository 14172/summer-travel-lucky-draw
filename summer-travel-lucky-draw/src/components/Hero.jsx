import { motion } from "motion/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import PrimaryButton from "./PrimaryButton";
export default function Hero() {
  const slides = [
    {
      desktop: "/bn1.png",
      mobile: "/bn-01.png",
    },
    {
      desktop: "/bn3.png",
      mobile: "/bn-02.png",
    },
  ];

  return (
    <section className="hero">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <picture>
              <source media="(max-width: 768px)" srcSet={slide.mobile} />

              <img src={slide.desktop} alt="" className="hero-bg" />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="overlay" />

      <motion.div
        className="hero-content max-w-[1200px] mx-auto"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="tag">青空旅遊 2026</span>

        <h1>
          夏季旅遊祭
          <br />
          <span className="en-title">Lucky Draw</span>
        </h1>

        <p className="hero-desc">
          抽日本機票、住宿升等、旅遊金優惠券，
          打造具有行銷導購概念的互動式活動頁。
        </p>

        <PrimaryButton className="btn">立即參加</PrimaryButton>

        <div className="scroll-indicator">
          <span></span>
        </div>
      </motion.div>
    </section>
  );
}
