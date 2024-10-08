"use client";
import useInViewAnimation from "@/animation/useScroll";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { downContainerVariant, leftContainerVariant } from "@/animation";
import Image from "next/image";
import img from "../../../../assets/sliders/main reception_page-0002.webp";

const SectionB = () => {
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
        In-House Woodworks Division
        <Image
          src={img}
          alt="about"
          width={600}
          style={{ maxWidth: "100%", height: "auto" }}
          priority
        ></Image>
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
          <span className={styles.header}>Recognizing</span> the pivotal role of
          wood in our projects, we launched BAKIA Woodworks, a dedicated sector
          within our firm, to manufacture wooden decorations, doors, and
          furniture. This division has become the exclusive source for all
          wooden elements in our projects, ensuring consistency and quality.
        </p>
      </motion.div>
    </div>
  );
};

export default SectionB;
