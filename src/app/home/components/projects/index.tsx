"use client";
import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import furintureImg from "../.../../../../../assets/projects/furinture.png";
import projectsImg from "../.../../../../../assets/projects/BAKIA.png";
import kitchenImg from "../.../../../../../assets/projects/KITCHEN.png";
import useInViewAnimation from "@/animation/useScroll";
import { motion } from "framer-motion";
import { downContainerVariant, upContainerVariant } from "@/animation";
import Link from "next/link";
const Projects = () => {
  const { controls, ref } = useInViewAnimation();
  const { controls: twoC, ref: twoF } = useInViewAnimation();
  const { controls: cThree, ref: refThree } = useInViewAnimation();
  const { controls: cFour, ref: refFour } = useInViewAnimation();
  const { controls: cFive, ref: refFive } = useInViewAnimation();
  const { controls: cSix, ref: refSix } = useInViewAnimation();
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
            <motion.button whileTap={{ scale: 0.8 }}>See more</motion.button>
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
          <motion.div
            whileHover={{
              scale: 1.2,
            }}
            transition={{
              duration: 0.2,
              delay: 0.0,
              type: "spring",
              damping: 10,
              mass: 0.75,
              stiffness: 300,
            }}
          >
            <Link href={"/project"}>
              <Image
                src={projectsImg}
                alt="Grid Gallery Slide"
                className={styles.img}
              />
            </Link>
          </motion.div>
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
          <motion.div
            whileHover={{
              scale: 1.2,
            }}
            transition={{
              duration: 0.2,
              delay: 0.0,
              type: "spring",
              damping: 10,
              mass: 0.75,
              stiffness: 300,
            }}
          >
            <Link href={"/furniture"}>
              <Image
                src={furintureImg}
                alt="Grid Gallery Slide"
                className={styles.img}
              />
            </Link>
          </motion.div>{" "}
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
            <motion.button whileTap={{ scale: 0.8 }}>See more</motion.button>
          </Link>
        </motion.div>
      </div>
      <div className={styles.contnet}>
        <motion.div
          animate={cFive}
          ref={refFive}
          variants={downContainerVariant}
          initial="hidden"
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          className={styles.textContainer}
        >
          <h1>Our Kitckens</h1>
          <h3>Grid Gallery </h3>
          <Link href={"/kitchen"}>
            <motion.button whileTap={{ scale: 0.8 }}>See more</motion.button>
          </Link>
        </motion.div>

        <motion.div
          animate={cSix}
          ref={refSix}
          variants={upContainerVariant}
          initial="hidden"
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          className={styles.imageContainer}
        >
          <motion.div
            whileHover={{
              scale: 1.2,
            }}
            transition={{
              duration: 0.2,
              delay: 0.0,
              type: "spring",
              damping: 10,
              mass: 0.75,
              stiffness: 300,
            }}
          >
            <Link href={"/kitchen"}>
              <Image
                src={kitchenImg}
                alt="Grid Gallery Slide"
                className={styles.img}
              />
            </Link>
          </motion.div>{" "}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
