import React from "react";
import styles from "./style.module.scss";
import SectionA from "./components/sectionA";
import SectionB from "./components/sectionB";
const AboutPage = () => {
  return (
    <div className={styles.pageContainer}>
      <SectionA />
      <SectionB />
    </div>
  );
};

export default AboutPage;
