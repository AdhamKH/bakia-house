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
import new1 from "../../assets/furnitures/compresssed/more/1.webp";
import new2 from "../../assets/furnitures/compresssed/more/10.webp";
import new3 from "../../assets/furnitures/compresssed/more/2(1).webp";
import new4 from "../../assets/furnitures/compresssed/more/2.webp";
import new5 from "../../assets/furnitures/compresssed/more/3.webp";
import new6 from "../../assets/furnitures/compresssed/more/4(1).webp";
import new7 from "../../assets/furnitures/compresssed/more/4.webp";
import new9 from "../../assets/furnitures/compresssed/more/5.webp";
import new10 from "../../assets/furnitures/compresssed/more/6.webp";
import new11 from "../../assets/furnitures/compresssed/more/7.webp";
import new12 from "../../assets/furnitures/compresssed/more/8.webp";
import new13 from "../../assets/furnitures/compresssed/more/9.webp";
import new14 from "../../assets/furnitures/compresssed/more/Untitled-1.webp";
import new15 from "../../assets/furnitures/compresssed/more/tabel 22.webp";
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
    new1,
    new2,
    new3,
    new4,
    new5,
    new6,
    new7,
    new9,
    new10,
    new11,
    new12,
    new13,
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
