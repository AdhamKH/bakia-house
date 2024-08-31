import React from "react";
import logo from "../../assets/logo.webp";
import styles from "./style.module.scss";
import Image from "next/image";
const Loader = () => {
  return (
    <div className={styles.container}>
      <div>
        <Image src={logo} alt="logo"></Image>
      </div>
    </div>
  );
};

export default Loader;
