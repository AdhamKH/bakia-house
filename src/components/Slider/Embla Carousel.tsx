"use client";
import React, { Component, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./style.module.scss";
import Image from "next/image";
import useInViewAnimation from "@/animation/useScroll";
import { motion } from "framer-motion";
import { leftContainerVariant } from "@/animation";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles["custom-arrow"]}`}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return <div className={`${className} ${styles.pre}`} onClick={onClick} />;
}

const CustomSlider = ({ images }: any) => {
  const sliderRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState<any>(0);
  const { ref, controls } = useInViewAnimation();

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "00",
    slidesToShow: 3,
    afterChange: (current: any) => setActiveIndex(current), // Updated to afterChange
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    cssEase: "linear",
    pauseOnHover: true,
    dots: true,
    dotsClass: `${styles["my-slick-dots"]} slick-thumb`,
    customPaging: function (i: any) {
      // Ensure images and project_images are available
      if (images?.[0]?.project_images?.[i]) {
        const e = images[0].project_images[i]; // Get the current image object
        return (
          <a key={e?.id || i}>
            <Image
              src={e?.image_path || ""}
              alt={`Thumbnail ${i + 1}`}
              width={50} // Thumbnail size (adjust as needed)
              height={50}
              className={styles.thumbnail}
            />
          </a>
        );
      }
      return <a key={i}>No Image</a>;
    },
  };
  const goToSlide = (index: any) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };
  // console.log("images", images[0]?.project_images);
  return (
    <motion.div
      className={styles.sliderContainer}
      ref={ref}
      animate={controls}
      variants={leftContainerVariant}
      initial="hidden"
      transition={{
        delay: 0.5,
        duration: 1.0,
      }}
    >
      <Slider {...settings}>
        {/* {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={i === activeIndex ? styles["active-slide"] : ""}
          >
            <img
              src={`https://swiperjs.com/demos/images/nature-${i + 1}.jpg`}
              alt={`Slide ${i + 1}`}
            />
          </div>
        ))} */}
        {images[0]?.project_images?.map((e: any, i: any) => {
          return (
            <div
              key={e?.id}
              className={i === activeIndex ? styles["active-slide"] : ""}
            >
              <Image
                src={e?.image_path}
                alt={`Slide ${i + 1}`}
                width={200}
                height={200}
                style={{}}
              />
            </div>
          );
        })}
      </Slider>
    </motion.div>
  );
};

export default CustomSlider;
