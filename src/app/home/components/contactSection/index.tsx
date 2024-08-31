"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import img from "../../../../assets/image parralex.webp";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";

const ContactSection = () => {
  return (
    <div className={styles.container}>
      <Image
        src={img}
        alt="pyramids"
        placeholder="blur" // Optional placeholder while loading
        fill // Fills container (Next.js 13+)
        style={{ objectFit: "cover", zIndex: -1 }} // Optional styles
        className={styles.bg}
      ></Image>
      <Parallax speed={7}>
        <div className={styles.contnet}>
          <div className={styles.overlay}>
            <button className={styles.button}>Contact</button>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default ContactSection;
