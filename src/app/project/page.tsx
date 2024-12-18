"use client";
import React, { useState } from "react";
import styles from "./style.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
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
import dice1 from "../../assets/projects/dise store/compressed/dice store_page-0001.webp";
import dice2 from "../../assets/projects/dise store/compressed/dice store_page-0002.webp";
import dice3 from "../../assets/projects/dise store/compressed/dice store_page-0003.webp";
import dice4 from "../../assets/projects/dise store/compressed/dice store_page-0004.webp";
import home1 from "../../assets/projects/Home zone/compressed/home zone store-images-1.webp";
import home2 from "../../assets/projects/Home zone/compressed/home zone store-images-2.webp";
import home3 from "../../assets/projects/Home zone/compressed/home zone store-images-3.webp";
import home4 from "../../assets/projects/Home zone/compressed/home zone store-images-4.webp";
import home5 from "../../assets/projects/Home zone/compressed/home zone store-images-5.webp";
import hurghada2 from "../../assets/projects/hurghada chalet/compressed/living 0002.webp";
import hurghada3 from "../../assets/projects/hurghada chalet/compressed/living 0003.webp";
import hurghada4 from "../../assets/projects/hurghada chalet/compressed/living 0004.webp";
import hurghada5 from "../../assets/projects/hurghada chalet/compressed/living 0005.webp";
import kitchBoho1 from "../../assets/projects/kitchens/boho kitchen/compressed/boho kitchen_page-0001.webp";
import kitchBoho2 from "../../assets/projects/kitchens/boho kitchen/compressed/boho kitchen_page-0002.webp";
import kitchBoho3 from "../../assets/projects/kitchens/boho kitchen/compressed/boho kitchen_page-0003.webp";
import modern1 from "../../assets/projects/modern flat 6th oct/compressed/PHOTO-2024-08-22-20-54-28 2.webp";
import modern2 from "../../assets/projects/modern flat 6th oct/compressed/PHOTO-2024-08-22-20-54-28.webp";
import modern3 from "../../assets/projects/modern flat 6th oct/compressed/PHOTO-2024-08-22-20-54-29.webp";
import modern4 from "../../assets/projects/modern flat 6th oct/compressed/PHOTO-2024-08-22-20-54-30 2.webp";
import modern5 from "../../assets/projects/modern flat 6th oct/compressed/PHOTO-2024-08-22-20-54-31.webp";
import modern6 from "../../assets/projects/modern flat 6th oct/compressed/PHOTO-2024-08-22-21-47-04.webp";
import modern7 from "../../assets/projects/modern flat 6th oct/compressed/PHOTO-2024-08-22-21-47-06.webp";
import zakuza1 from "./../../assets/projects/zakzuk/PHOTO-2024-08-20-16-08-50 10.webp";
import zakuza2 from "./../../assets/projects/zakzuk/PHOTO-2024-08-20-16-08-50 11.webp";
import zakuza3 from "./../../assets/projects/zakzuk/PHOTO-2024-08-20-16-08-50 12.webp";
import zakuza4 from "./../../assets/projects/zakzuk/PHOTO-2024-08-20-16-08-50 13.webp";
import zakuza5 from "./../../assets/projects/zakzuk/PHOTO-2024-08-20-16-08-50 14.webp";
import zakuza6 from "./../../assets/projects/zakzuk/PHOTO-2024-08-20-16-08-50 15.webp";
import zakuza7 from "./../../assets/projects/zakzuk/PHOTO-2024-08-20-16-08-50 16.webp";
import {
  EffectCoverflow,
  Pagination,
  FreeMode,
  Navigation,
  Thumbs,
} from "swiper/modules";
import Image from "next/image";
import CustomSlider from "@/components/Slider/Embla Carousel";

// configure Swiper to use modules
SwiperCore.use([Pagination, EffectCoverflow]);
const AboutPage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>({});

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
    imgs: [ps1, ps2, ps3, ps4, ps5],
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
  const modernFlat = {
    title: "Modern flat",
    imgs: [modern1, modern2, modern3, modern4, modern5, modern6, modern7],
  };
  const zakuza = {
    title: "Zakuza",
    imgs: [zakuza1, zakuza2, zakuza3, zakuza4, zakuza5, zakuza6, zakuza7],
  };
  const combinedData = {
    title: "Combined Projects", // Single title for all images
    imgs: [
      // Combine all images from different stores
      ...BaggioStore.imgs,
      ...FriedChicken.imgs,
      ...Playstation.imgs,
      ...DiceStore.imgs,
      ...homeZone.imgs,
      ...hurghada.imgs,
      ...KitchenBoho.imgs,
      ...modernFlat.imgs,
      ...zakuza.imgs,
    ],
  };
  SwiperCore.use([EffectCoverflow, Pagination]);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.content}>
        {/* <Projects data={BaggioStore} />
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
        <Projects data={modernFlat} />
        <hr />
        <Projects data={zakuza} /> */}
        {/* <Projects data={combinedData} /> */}
        <CustomSlider />
      </div>
    </div>
  );
};

export default AboutPage;
