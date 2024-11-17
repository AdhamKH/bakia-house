import React from "react";
import styles from "./style.module.scss";
import useInViewAnimation from "@/animation/useScroll";
import { motion } from "framer-motion";
import { downContainerVariant, leftContainerVariant } from "@/animation";
const ProjectDetails = ({ details }: any) => {
  // Map keys to user-friendly labels
  console.log("details", details[0]?.address);
  const { ref, controls } = useInViewAnimation();
  return (
    <div className={styles.detailsContainer}>
      <motion.div
        className={styles.detailItem}
        ref={ref}
        animate={controls}
        variants={downContainerVariant}
        initial="hidden"
        transition={{
          delay: 0.5,
          duration: 1.5,
        }}
      >
        <div className={styles.keyValue}>
          <span className={styles.label}>Title: </span>
          <span className={styles.value}>{details[0]?.address}</span>
        </div>
        <div className={styles.keyValue}>
          <span className={styles.label}>Location :</span>
          <span className={styles.value}>{details[0]?.project_location} </span>
        </div>
        <div className={styles.keyValue}>
          <span className={styles.label}> Project type:</span>
          <span className={styles.value}>{details[0]?.client_type}</span>
        </div>
        <div className={styles.keyValue}>
          <span className={styles.label}>Project implementation year:</span>
          <span className={styles.value}>{details[0]?.client_type}</span>
        </div>
        <div className={styles.keyValue}>
          <span className={styles.label}>Project style :</span>
          <span className={styles.value}>{details[0]?.project_style}</span>
        </div>
        <div className={styles.keyValue}>
          <span className={styles.label}>Project area :</span>
          <span className={styles.value}>{details[0]?.project_space}m</span>
        </div>
        <div className={styles.keyValue}>
          <span className={styles.label}>{details[0]?.project_style}</span>
        </div>
        <div className={styles.keyValue}>
          <span className={styles.label}>Description </span>

          <span className={styles.value}>{details[0]?.description}</span>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
