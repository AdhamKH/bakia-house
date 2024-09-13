import React from "react";
import styles from "./style.module.scss";
import Projects from "./components/projects";
import baggieimg1 from "../../assets/projects/Baggio store/compressed/BAGGIO STORE_00001.webp";
import baggieimg2 from "../../assets/projects/Baggio store/compressed/BAGGIO STORE_00002.webp";
import baggieimg3 from "../../assets/projects/Baggio store/compressed/BAGGIO STORE_00003.webp";
import baggieimg4 from "../../assets/projects/Baggio store/compressed/BAGGIO STORE_00004.webp";
import baggieimg5 from "../../assets/projects/Baggio store/compressed/BAGGIO STORE_00005.webp";
import baggieimg6 from "../../assets/projects/Baggio store/compressed/BAGGIO STORE_00006.webp";
import fried1 from "../../assets/projects/Fried chicken/compressed/fried chicken_page-0001.webp";
import fried2 from "../../assets/projects/Fried chicken/compressed/fried chicken_page-0002.webp";
import fried3 from "../../assets/projects/Fried chicken/compressed/fried chicken_page-0003.webp";
import ps1 from "../../assets/projects/boda_s Playstation/compressed/playstation hub_page-0001.webp";
import ps2 from "../../assets/projects/boda_s Playstation/compressed/playstation hub_page-0002.webp";
import ps3 from "../../assets/projects/boda_s Playstation/compressed/playstation hub_page-0003.webp";
import ps4 from "../../assets/projects/boda_s Playstation/compressed/playstation hub_page-0004.webp";
import ps5 from "../../assets/projects/boda_s Playstation/compressed/playstation hub_page-0005.webp";
import ps6 from "../../assets/projects/boda_s Playstation/compressed/playstation hub_page-0006.webp";
import dice1 from "../../assets/projects/dise store/compressed/dice store_page-0001.webp";
import dice2 from "../../assets/projects/dise store/compressed/dice store_page-0002.webp";
import dice3 from "../../assets/projects/dise store/compressed/dice store_page-0003.webp";
import dice4 from "../../assets/projects/dise store/compressed/dice store_page-0004.webp";
import home1 from "../../assets/projects/Home zone/compressed/home zone store-images-1.webp";
import home2 from "../../assets/projects/Home zone/compressed/home zone store-images-2.webp";
import home3 from "../../assets/projects/Home zone/compressed/home zone store-images-3.webp";
import home4 from "../../assets/projects/Home zone/compressed/home zone store-images-4.webp";
import home5 from "../../assets/projects/Home zone/compressed/home zone store-images-5.webp";
import hurghada2 from "../../assets/projects/hurghada chalet/compressed/living room + dining + terace_page-0002.webp";
import hurghada3 from "../../assets/projects/hurghada chalet/compressed/living room + dining + terace_page-0003.webp";
import hurghada4 from "../../assets/projects/hurghada chalet/compressed/living room + dining + terace_page-0004.webp";
import hurghada5 from "../../assets/projects/hurghada chalet/compressed/living room + dining + terace_page-0005.webp";
import kitchBoho1 from "../../assets/projects/kitchens/boho kitchen/compressed/boho kitchen_page-0001.webp";
import kitchBoho2 from "../../assets/projects/kitchens/boho kitchen/compressed/boho kitchen_page-0002.webp";
import kitchBoho3 from "../../assets/projects/kitchens/boho kitchen/compressed/boho kitchen_page-0003.webp";

const AboutPage = () => {
  const BaggioStore = {
    title: "Baggio store",
    imgs: [
      baggieimg3,
      baggieimg2,
      baggieimg3,
      baggieimg4,
      baggieimg5,
      baggieimg6,
    ],
  };
  const FriedChicken = {
    title: "Fried Chicken",
    imgs: [fried1, fried2, fried3],
  };
  const Playstation = {
    title: "Playstation",
    imgs: [ps1, ps2, ps3, ps4, ps5, ps6],
  };
  const DiceStore = {
    title: "Dice Store",
    imgs: [dice1, dice2, dice3, dice4],
  };
  const homeZone = {
    title: "Home  Zone",
    imgs: [home1, home2, home3, home4, home5],
  };
  const hurghada = {
    title: "hurghada chalet",
    imgs: [hurghada2, hurghada3, hurghada4, hurghada5],
  };
  const KitchenBoho = {
    title: "boho kitchen",
    imgs: [kitchBoho1, kitchBoho2, kitchBoho3],
  };
  return (
    <div className={styles.pageContainer}>
      <div className={styles.content}>
        <Projects data={BaggioStore} />
        <hr />
        <Projects data={FriedChicken} />
        <hr />
        <Projects data={Playstation} />
        <hr />
        <Projects data={DiceStore} />
        <hr />
        <Projects data={homeZone} />
        <hr />
        <Projects data={hurghada} />
        <hr />
        <Projects data={KitchenBoho} />
      </div>
    </div>
  );
};

export default AboutPage;
