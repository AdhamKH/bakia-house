"use client";
import React from "react";
import styles from "./style.module.scss";
import img1 from "../../../../assets/teamSection/BAKIA.pdf-image-044.png";
import img2 from "../../../../assets/teamSection/BAKIA.pdf-image-045.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import useInViewAnimation from "@/animation/useScroll";
import {
  leftContainerVariant,
  rightContainerVariant,
  upContainerVariant,
} from "@/animation";
const Team = () => {
  const { controls: conOne, ref: refOne } = useInViewAnimation();
  const { controls: coSec, ref: refSec } = useInViewAnimation();
  const { controls: conThird, ref: refThird } = useInViewAnimation();
  return (
    <section className={styles.teamSection}>
      <motion.h2
        ref={refOne}
        animate={conOne}
        variants={upContainerVariant}
        initial="hidden"
        className={styles.title}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        CEO
      </motion.h2>
      <div className={styles.teamContainer}>
        <motion.div
          ref={refSec}
          animate={coSec}
          variants={leftContainerVariant}
          initial="hidden"
          className={styles.member}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className={styles.imageContainer}>
            <Image src={img1} alt="Mahmoud Al-Nahhas" />
          </div>
          <h3>MAHMOUD AL-NAHHAS</h3>
          <p>CO-FOUNDER/ARCHITECT</p>
        </motion.div>
        <motion.div
          ref={refThird}
          animate={conThird}
          variants={rightContainerVariant}
          initial="hidden"
          className={styles.member}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className={styles.imageContainer}>
            <Image src={img2} alt="Abdelrahman Abo-Habaga" />
          </div>
          <h3>ABDELRAHMAN ABO-HABAGA</h3>
          <p>CO-FOUNDER/ARCHITECT</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
