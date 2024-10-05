"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./style.module.scss";
import Image from "next/image";
import bg1 from "../../../../assets/sliders/main reception_page-0001.webp";
import bg2 from "../../../../assets//sliders/main reception_page-0002.webp";
import bg3 from "../../../../assets/sliders/main reception_page-0003.webp";
import bg4 from "../../../../assets/sliders/1.webp";
import bg5 from "../../../../assets/sliders/PHOTO-2024-08-22-20-54-28.webp";
import bg6 from "../../../../assets/sliders/PHOTO-2024-08-22-20-54-28 2.webp";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import { downContainerVariant, leftContainerVariant } from "@/animation";
import useInViewAnimation from "@/animation/useScroll";

const HeroSlider = () => {
  const { ref, controls } = useInViewAnimation();

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      effect={"fade"}
      // navigation={true}
      // pagination={{
      //   clickable: true,
      // }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      preventInteractionOnTransition={false}
      modules={[EffectFade, Autoplay]}
      keyboard={{ enabled: false }} // Disables keyboard navigation
      mousewheel={{ forceToAxis: false }} // Disables mousewheel navigation
      allowTouchMove={false} // Disables touch/mouse dragging
    >
      <SwiperSlide>
        <motion.div className={styles.contentContainer}>
          <div className={styles.heroSlide}>
            <div className={styles.overlay}>
              <motion.div
                variants={leftContainerVariant}
                initial="hidden"
                ref={ref}
                animate={controls}
                transition={{ duration: 0.6 }}
                className={styles.content}
              >
                <div>
                  <h1>Vision</h1>
                  <p>
                    To deliver exceptional interior design and execution
                    services that transform spaces into more than just visually
                    appealing environments. We aim to create functional,
                    personalized spaces that perfectly align with your needs and
                    lifestyle. Our well-defined, flexible process ensures that
                    your interior design journey is not only seamless but also
                    unforgettable.
                  </p>
                </div>
              </motion.div>
              <Image
                src={bg1}
                fill
                className={styles.imgAnimation}
                alt="background"
                style={{ zIndex: "-1" }}
                priority
              ></Image>
            </div>
          </div>
        </motion.div>
      </SwiperSlide>
      <SwiperSlide>
        <motion.div className={styles.contentContainer}>
          <div className={styles.heroSlide}>
            <div className={styles.overlay}>
              <motion.div
                variants={leftContainerVariant}
                initial="hidden"
                ref={ref}
                animate={controls}
                transition={{ duration: 0.6 }}
                className={styles.content}
              >
                <div>
                  <h1>Vision</h1>
                  <p>
                    To deliver exceptional interior design and execution
                    services that transform spaces into more than just visually
                    appealing environments. We aim to create functional,
                    personalized spaces that perfectly align with your needs and
                    lifestyle. Our well-defined, flexible process ensures that
                    your interior design journey is not only seamless but also
                    unforgettable.
                  </p>
                </div>
              </motion.div>
              <Image
                src={bg2}
                fill
                className={styles.imgAnimation}
                alt="background"
                style={{ zIndex: "-1" }}
                priority
              ></Image>
            </div>
          </div>
        </motion.div>
      </SwiperSlide>
      <SwiperSlide>
        <motion.div className={styles.contentContainer}>
          <div className={styles.heroSlide}>
            <div className={styles.overlay}>
              <motion.div
                variants={leftContainerVariant}
                initial="hidden"
                ref={ref}
                animate={controls}
                transition={{ duration: 0.6 }}
                className={styles.content}
              >
                <div>
                  <h1>Vision</h1>
                  <p>
                    To deliver exceptional interior design and execution
                    services that transform spaces into more than just visually
                    appealing environments. We aim to create functional,
                    personalized spaces that perfectly align with your needs and
                    lifestyle. Our well-defined, flexible process ensures that
                    your interior design journey is not only seamless but also
                    unforgettable.
                  </p>
                </div>
              </motion.div>
              <Image
                src={bg3}
                fill
                className={styles.imgAnimation}
                alt="background"
                style={{ zIndex: "-1" }}
                priority
              ></Image>
            </div>
          </div>
        </motion.div>
      </SwiperSlide>
      <SwiperSlide>
        <motion.div className={styles.contentContainer}>
          <div className={styles.heroSlide}>
            <div className={styles.overlay}>
              <motion.div
                variants={leftContainerVariant}
                initial="hidden"
                ref={ref}
                animate={controls}
                transition={{ duration: 0.6 }}
                className={styles.content}
              >
                <div>
                  <h1>Vision</h1>
                  <p>
                    To deliver exceptional interior design and execution
                    services that transform spaces into more than just visually
                    appealing environments. We aim to create functional,
                    personalized spaces that perfectly align with your needs and
                    lifestyle. Our well-defined, flexible process ensures that
                    your interior design journey is not only seamless but also
                    unforgettable.
                  </p>
                </div>
              </motion.div>
              <Image
                src={bg4}
                fill
                className={styles.imgAnimation}
                alt="background"
                style={{ zIndex: "-1" }}
                priority
              ></Image>
            </div>
          </div>
        </motion.div>
      </SwiperSlide>
      <SwiperSlide>
        <motion.div className={styles.contentContainer}>
          <div className={styles.heroSlide}>
            <div className={styles.overlay}>
              <motion.div
                variants={leftContainerVariant}
                initial="hidden"
                ref={ref}
                animate={controls}
                transition={{ duration: 0.6 }}
                className={styles.content}
              >
                <div>
                  <h1>Vision</h1>
                  <p>
                    To deliver exceptional interior design and execution
                    services that transform spaces into more than just visually
                    appealing environments. We aim to create functional,
                    personalized spaces that perfectly align with your needs and
                    lifestyle. Our well-defined, flexible process ensures that
                    your interior design journey is not only seamless but also
                    unforgettable.
                  </p>
                </div>
              </motion.div>
              <Image
                src={bg5}
                fill
                className={styles.imgAnimation}
                alt="background"
                style={{ zIndex: "-1" }}
                priority
              ></Image>
            </div>
          </div>
        </motion.div>
      </SwiperSlide>
      <SwiperSlide>
        <motion.div className={styles.contentContainer}>
          <div className={styles.heroSlide}>
            <div className={styles.overlay}>
              <motion.div
                variants={leftContainerVariant}
                initial="hidden"
                ref={ref}
                animate={controls}
                transition={{ duration: 0.6 }}
                className={styles.content}
              >
                <div>
                  <h1>Vision</h1>
                  <p>
                    To deliver exceptional interior design and execution
                    services that transform spaces into more than just visually
                    appealing environments. We aim to create functional,
                    personalized spaces that perfectly align with your needs and
                    lifestyle. Our well-defined, flexible process ensures that
                    your interior design journey is not only seamless but also
                    unforgettable.
                  </p>
                </div>
              </motion.div>
              <Image
                src={bg6}
                fill
                className={styles.imgAnimation}
                alt="background"
                style={{ zIndex: "-1" }}
                priority
              ></Image>
            </div>
          </div>
        </motion.div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
