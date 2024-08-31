"use client";
import React from "react";
import styles from "./style.module.scss";
import img from "../../../../assets/customerJpuney/customerJourny (1).png";
import Image from "next/image";
import useInViewAnimation from "@/animation/useScroll";
import { motion } from "framer-motion";
import { leftContainerVariant, rightContainerVariant } from "@/animation";
const CustomerJourney = () => {
  const { controls: twoC, ref: twoF } = useInViewAnimation();
  const { controls: oneC, ref: oneF } = useInViewAnimation();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <motion.h1
          animate={twoC}
          ref={twoF}
          variants={leftContainerVariant}
          initial="hidden"
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >
          Customer journey
          <hr />
        </motion.h1>
        <motion.div
          animate={oneC}
          ref={oneF}
          variants={rightContainerVariant}
          initial="hidden"
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >
          <Image src={img} alt="journey"></Image>
        </motion.div>
      </div>
    </div>
  );
};

export default CustomerJourney;
