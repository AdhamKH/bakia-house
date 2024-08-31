"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import img from "../../../../assets/categories.webp";
import { motion } from "framer-motion";
import useInViewAnimation from "@/animation/useScroll";
import { showAnimationWithChildren } from "@/animation";

const Categories = () => {
  const { ref, controls } = useInViewAnimation();
  const { ref: ref1, controls: control1 } = useInViewAnimation();
  const { ref: ref2, controls: control2 } = useInViewAnimation();
  const { ref: ref3, controls: control3 } = useInViewAnimation();

  const leftContainerVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.3, // Time between each child animation
        when: "beforeChildren", // Ensures children animate after parent
      },
    },
  };
  const childVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className={styles.container}
      variants={leftContainerVariant}
      initial="hidden"
      ref={ref}
      animate={controls}
      transition={{ duration: 0.2 }}
    >
      <motion.div variants={childVariant} className={styles.room}>
        <div className={styles.roomImage}>
          <Image
            src={img} // Replace with your image path
            alt="Kitchen"
            // layout="responsive"
            // width={500}
            // height={300}
            // objectFit="cover"
            style={{ width: "100%", height: "100%" }}
            fill
          />
        </div>
        <div className={styles.label}>kitchen</div>
      </motion.div>
      <motion.div variants={childVariant} className={styles.room}>
        <div className={styles.roomImage}>
          <Image
            src={img} // Replace with your image path
            alt="Kitchen"
            // layout="responsive"
            // width={500}
            // height={300}
            // objectFit="cover"
            style={{ width: "100%", height: "100%" }}
            fill
          />
        </div>
        <div className={styles.label}>kitchen</div>
      </motion.div>
      <motion.div variants={childVariant} className={styles.room}>
        <div className={styles.roomImage}>
          <Image
            src={img} // Replace with your image path
            alt="Kitchen"
            // layout="responsive"
            // width={500}
            // height={300}
            // objectFit="cover"
            style={{ width: "100%", height: "100%" }}
            fill
          />
        </div>
        <div className={styles.label}>kitchen</div>
      </motion.div>
    </motion.div>
  );
};

export default Categories;
