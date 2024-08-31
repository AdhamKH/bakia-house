"use client";
import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import img from "../.../../../../../assets/projects/living room + dining + terace_page-0004.jpg";
import useInViewAnimation from "@/animation/useScroll";
import { motion } from "framer-motion";
import { downContainerVariant, upContainerVariant } from "@/animation";
const Projects = () => {
  const { controls, ref } = useInViewAnimation();
  const { controls: twoC, ref: twoF } = useInViewAnimation();
  return (
    <div className={styles.gridGallerySlide}>
      <div className={styles.contnet}>
        <motion.div
          animate={controls}
          ref={ref}
          variants={downContainerVariant}
          initial="hidden"
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          className={styles.textContainer}
        >
          <h3>Our Projects</h3>
          <h1>Grid Gallery Slide</h1>
        </motion.div>
        <motion.div
          animate={twoC}
          ref={twoF}
          variants={upContainerVariant}
          initial="hidden"
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          className={styles.imageContainer}
        >
          <Image src={img} alt="Grid Gallery Slide" className={styles.img} />
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
