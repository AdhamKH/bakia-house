"use client";
import useInViewAnimation from "@/animation/useScroll";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { downContainerVariant, leftContainerVariant } from "@/animation";
import Image from "next/image";
const SectionA = () => {
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
        History
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
          <span className={styles.header}>BAKIA</span> was founded in 2021 as an
          architectural and interior design firm. In our initial year as a
          startup, we concentrated solely on interior design, deliberately
          refraining from execution services to refine our processes and lay a
          solid foundation for future endeavors
        </p>
      </motion.div>
    </div>
  );
};

export default SectionA;