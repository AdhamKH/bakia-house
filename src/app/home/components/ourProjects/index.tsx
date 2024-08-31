"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import img from "../../../../assets/sliders/1.webp";
import useInViewAnimation from "@/animation/useScroll";
import { leftContainerVariant, sowContainerVariant } from "@/animation";
const OurProjects = () => {
  const { ref, controls } = useInViewAnimation();

  const swiperRef = useRef(null);
  const [hasEventOccurred, setHasEventOccurred] = useState(false);
  const [number, setNumber] = useState();
  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance: any = swiperRef.current;

      // Function to add custom class to the active slide
      const addCustomClassToActiveSlide = () => {
        swiperInstance.slides.forEach((slide: any) => {
          slide.classList.remove(styles["active-slide"]);
        });

        const activeSlide =
          swiperInstance.slides[swiperInstance.activeIndex + 1];
        if (activeSlide) {
          activeSlide.classList.add(styles["active-slide"]);
        }
      };

      // Add class on initial render and every slide change
      addCustomClassToActiveSlide();
      swiperInstance.on("slideChange", addCustomClassToActiveSlide);

      // Cleanup event listener on component unmount
      // return () => {
      //   swiperInstance.off("slideChange", addCustomClassToActiveSlide);
      // };
    }
  }, [number]);
  return (
    <motion.div
      variants={sowContainerVariant}
      initial="hidden"
      ref={ref}
      animate={controls}
      transition={{ duration: 0.6 }}
      className={styles.container}
    >
      <div className={styles.title}>
        <h1>Our project</h1>
      </div>
      <div className={styles["slider-container"]}>
        <Swiper
          slidesPerView={3}
          spaceBetween={0}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className={styles.mySwiper}
          onSwiper={(swiper: any) => {
            swiperRef.current = swiper;
            // Adding custom class on initial load
            if (swiper) {
              const activeSlide = swiper.slides[swiper.activeIndex];
              if (activeSlide) {
                activeSlide.classList.add(styles["active-slide"]);
              }
            }
          }}
        >
          <SwiperSlide>
            <div className={styles.singleDiv}>
              <Image src={img} alt="slider" className={styles.img}></Image>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.singleDiv}>
              <Image src={img} alt="slider" className={styles.img}></Image>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.singleDiv}>
              <Image src={img} alt="slider" className={styles.img}></Image>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.singleDiv}>
              <Image src={img} alt="slider" className={styles.img}></Image>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.singleDiv}>
              <Image src={img} alt="slider" className={styles.img}></Image>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.singleDiv}>
              <Image src={img} alt="slider" className={styles.img}></Image>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </motion.div>
  );
};

export default OurProjects;
