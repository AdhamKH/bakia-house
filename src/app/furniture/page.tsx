import React from "react";
import styles from "./style.module.scss";
import Projects from "./components/furnitures";
import img1 from "../../assets/furnitures/compresssed/1.webp";
import img1_2 from "../../assets/furnitures/compresssed/1_2.webp";
import img2 from "../../assets/furnitures/compresssed/2.webp";
import img3 from "../../assets/furnitures/compresssed/3.webp";
import img4 from "../../assets/furnitures/compresssed/4.webp";
import img5 from "../../assets/furnitures/compresssed/5.webp";
import img6 from "../../assets/furnitures/compresssed/6.webp";
import img7 from "../../assets/furnitures/compresssed/7.webp";
import img8 from "../../assets/furnitures/compresssed/8.webp";
import img9 from "../../assets/furnitures/compresssed/9.webp";
import img10 from "../../assets/furnitures/compresssed/10.webp";
import img11 from "../../assets/furnitures/compresssed/11.webp";
import render22 from "../../assets/furnitures/compresssed/render_22.webp";
import render8 from "../../assets/furnitures/compresssed/render_8.webp";
import render17 from "../../assets/furnitures/compresssed/render_17.webp";
import bar1 from "../../assets/furnitures/compresssed/bar1.webp";
import bar2 from "../../assets/furnitures/compresssed/bar2.webp";
import bar3 from "../../assets/furnitures/compresssed/bar3.webp";
import bar4 from "../../assets/furnitures/compresssed/bar4.webp";
import bar5 from "../../assets/furnitures/compresssed/bar5.webp";
import render6 from "../../assets/furnitures/compresssed/render_6.webp";
import render23 from "../../assets/furnitures/compresssed/render_23.webp";
const AboutPage = () => {
  const images = [
    img1,
    img1_2,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    render22,
    render8,
    render17,
    bar1,
    bar2,
    bar3,
    bar4,
    bar5,
    render6,
    render23,
  ];
  return (
    <div className={styles.pageContainer}>
      <div className={styles.content}>
        <Projects imgs={images} />
      </div>
    </div>
  );
};

export default AboutPage;
