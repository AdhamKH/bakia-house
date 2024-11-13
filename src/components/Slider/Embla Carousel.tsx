"use client";
import React, { Component, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./style.module.scss";

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

const CustomSlider = () => {
  const sliderRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState<any>(0);

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
    customPaging: function (i: number) {
      return (
        <a>
          <img
            src={`${`https://swiperjs.com/demos/images/nature-`}${i + 1}.jpg`}
            className={i === activeIndex ? styles.active : ""}
            alt={`Thumbnail ${i + 1}`}
          />
        </a>
      );
    },
  };
  console.log("activeIndex", activeIndex);
  const goToSlide = (index: any) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };
  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={i === activeIndex ? styles["active-slide"] : ""}
          >
            <img
              src={`https://swiperjs.com/demos/images/nature-${i + 1}.jpg`}
              alt={`Slide ${i + 1}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
