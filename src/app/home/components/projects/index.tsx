"use client";
import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import img from "../.../../../../../assets/projects/living room + dining + terace_page-0004.jpg";
import useInViewAnimation from "@/animation/useScroll";
import { motion } from "framer-motion";
import { downContainerVariant, upContainerVariant } from "@/animation";
import Link from "next/link";
const Projects = () => {
  const { controls, ref } = useInViewAnimation();
  const { controls: twoC, ref: twoF } = useInViewAnimation();
  const { controls: cThree, ref: refThree } = useInViewAnimation();
  const { controls: cFour, ref: refFour } = useInViewAnimation();
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
          <h1>Our Projects</h1>
          <h3>Grid Gallery </h3>
          <Link href={"/project"}>
            <button>See more</button>
          </Link>
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
      <div className={styles.contnet}>
        <motion.div
          animate={cFour}
          ref={refFour}
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
        <motion.div
          animate={cThree}
          ref={refThree}
          variants={downContainerVariant}
          initial="hidden"
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          className={styles.textContainer}
        >
          <h1>Our Furniture</h1>
          <h3>Grid Gallery </h3>
          <Link href={"/furniture"}>
            <button>See more</button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
