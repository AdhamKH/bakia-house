"use client";
import Countdown from "@/components/countDown";
import React from "react";
import styles from "./style.module.scss";
import bg from "../../../../assets/numbersSection/boy room_page-0002.jpg";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import useInViewAnimation from "@/animation/useScroll";
import { scaleAnimationVaraint } from "@/animation";
const CountDownSection = () => {
  const { controls: oneC, ref: oneF } = useInViewAnimation();
  return (
    <div className={styles.container}>
      <Image src={bg} alt="background" fill className={styles.bg}></Image>
      <Parallax
        speed={7}
        style={{ position: "relative", zIndex: "33", width: "100%" }}
      >
        <motion.div
          className={styles.content}
          ref={oneF}
          animate={oneC}
          variants={scaleAnimationVaraint}
          initial="hidden"
          transition={{
            duration: 0.8,
          }}
        >
          <div className={styles.header}>
            <h1>We look at the Future </h1>
            <h1>straight in the eye</h1>
          </div>
          <div className={styles.two}>
            <Countdown start={0} end={35} key={1} icon="+" title="Projects" />
            <Countdown
              start={0}
              end={5}
              key={2}
              icon="+"
              title="Years of experience"
            />
          </div>
          <div>
            <Countdown
              start={0}
              end={90}
              key={3}
              icon="%"
              title="Satisfied clients"
            />
          </div>
        </motion.div>
      </Parallax>
    </div>
  );
};

export default CountDownSection;
