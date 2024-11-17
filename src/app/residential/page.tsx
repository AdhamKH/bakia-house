"use client";
import React, { useEffect, useState } from "react";
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
import Loader from "@/components/loader";
import axios from "axios";
import { baseUrl, companyID } from "@/util";
import CardGrid from "./components/card";

const AboutPage = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true); // Loading state
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Show loader when starting the request
      try {
        const response = await axios.get(`${baseUrl}/companies/${companyID}`);
        setData(response.data); // Save the fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const resedentialPhtots = data?.data[0]?.projects?.filter((e: any) => {
    return e?.position === "project" && e?.project_type === "residential";
  });
  console.log("resedentialPhtots", resedentialPhtots);
  if (loading) {
    return <Loader />;
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.content}>
        <CardGrid items={resedentialPhtots} />
      </div>
    </div>
  );
};

export default AboutPage;
