import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import logo from "../../assets/logo.webp";
const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.imageContainer}>
        <div className={styles.loader}></div>
        <Image src={logo} alt="logo" width={150}></Image>
      </div>
    </div>
  );
};

export default Loader;
