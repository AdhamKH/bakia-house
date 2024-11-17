import React from "react";
import styles from "./style.module.scss";
import Projects from "./components/projects";
import boho1 from "../../assets/kitchens/boho kitchen/compressed/boho kitchen_page-0001.webp";
import boho2 from "../../assets/kitchens/boho kitchen/compressed/boho kitchen_page-0002.webp";
import boho3 from "../../assets/kitchens/boho kitchen/compressed/boho kitchen_page-0003.webp";
import d1_1 from "../../assets/kitchens/kitchen d1 - d2/compressed/kitchen d1_page-0001.webp";
import d1_2 from "../../assets/kitchens/kitchen d1 - d2/compressed/kitchen d1_page-0002.webp";
import d1_3 from "../../assets/kitchens/kitchen d1 - d2/compressed/kitchen d2_page-0001.webp";
import d1_4 from "../../assets/kitchens/kitchen d1 - d2/compressed/kitchen d2_page-0002.webp";
import maadi1 from "../../assets/kitchens/maadi kitchen/compressed/maadi kitchen_page-0001.webp";
import maadi2 from "../../assets/kitchens/maadi kitchen/compressed/maadi kitchen_page-0002.webp";
import maadi3 from "../../assets/kitchens/maadi kitchen/compressed/maadi kitchen_page-0003.webp";
import mini1 from "../../assets/kitchens/mini kitchen/compressed/1.webp";
import mini2 from "../../assets/kitchens/mini kitchen/compressed/2.webp";
import mini3 from "../../assets/kitchens/mini kitchen/compressed/3.webp";
import mini4 from "../../assets/kitchens/mini kitchen/compressed/4.webp";
import mini5 from "../../assets/kitchens/mini kitchen/compressed/5.webp";
import turkey2 from "../../assets/kitchens/Turkey kitchen/compressed/kitchen turkey_page-0001.webp";
import turkey3 from "../../assets/kitchens/Turkey kitchen/compressed/kitchen turkey_page-0002.webp";
import turkey4 from "../../assets/kitchens/Turkey kitchen/compressed/kitchen turkey_page-0003.webp";
import turkey5 from "../../assets/kitchens/Turkey kitchen/compressed/kitchen turkey_page-0004.webp";
import kitchBoho1 from "../../assets/projects/kitchens/boho kitchen/compressed/boho kitchen_page-0001.webp";
import kitchBoho2 from "../../assets/projects/kitchens/boho kitchen/compressed/boho kitchen_page-0002.webp";
import kitchBoho3 from "../../assets/projects/kitchens/boho kitchen/compressed/boho kitchen_page-0003.webp";

const AboutPage = () => {
  const bohoChicken = {
    title: "Boho kitchen",
    imgs: [boho1, boho2, boho3],
  };
  const kitcenD1D2 = {
    title: "kitchen d1 - d2",
    imgs: [d1_1, d1_2, d1_3, d1_4],
  };
  const KitchenMaadi = {
    title: "Maadi kitchen",
    imgs: [maadi1, maadi2, maadi3],
  };
  const KitchenMini = {
    title: "Mini kitchen",
    imgs: [mini1, mini2, mini3, mini4, mini5],
  };
  const KitchenTurkey = {
    title: "Turkey kitchen",
    imgs: [turkey2, turkey3, turkey4, turkey5],
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.content}></div>
    </div>
  );
};

export default AboutPage;
