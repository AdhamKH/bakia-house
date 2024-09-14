"use client";
import useInViewAnimation from "@/animation/useScroll";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { downContainerVariant, leftContainerVariant } from "@/animation";
import Link from "next/link";
const AboutUS = () => {
  const { controls, ref } = useInViewAnimation();
  const { controls: secondControl, ref: secondRef } = useInViewAnimation();
  return (
    <div className={styles.container}>
      <motion.div
        ref={ref}
        animate={controls}
        variants={leftContainerVariant}
        initial="hidden"
        className={styles.heading}
        transition={{
          delay: 0.3,
          duration: 0.8,
        }}
      >
        About us
      </motion.div>
      <motion.div
        className={styles.content}
        ref={ref}
        animate={controls}
        variants={downContainerVariant}
        initial="hidden"
        transition={{
          delay: 0.5,
          duration: 0.8,
        }}
      >
        <p className={styles.text}>
          <span className={styles.header}>At BAKIA</span>, we believe interior
          design is a deeply personal and client-centric service, fundamentally
          driven by your vision. This belief is what fuels the passion and
          dedication of every team member at BAKIA. Over the years, we have
          tirelessly refined our processes to ensure we fully understand and
          enhance your vision.
        </p>
        <div className={styles.buttonWrapper}>
          <Link href={"/about"}>
            {" "}
            <button className={styles.button}>Our History</button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUS;
