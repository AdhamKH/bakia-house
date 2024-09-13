"use client";
import React from "react";
import NavBar from "../../../../components/navBar";
import styles from "./style.module.scss";
import Image from "next/image";
import bg from "../../../../assets/office-2-scaled.webp";
import useInViewAnimation from "@/animation/useScroll";
import { downContainerVariant, leftContainerVariant } from "@/animation";
import { motion } from "framer-motion";
import HeroSlider from "../slider";

const Header = () => {
  return (
    <div className={styles.container}>
      {/* <NavBar /> */}
      {/* <Image src={bg} fill alt="background"></Image> */}
      <div className={styles.slider}>
        <HeroSlider />
      </div>
    </div>
  );
};

export default Header;
