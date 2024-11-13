// "use client";
import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import Projects from "./components/furnitures";

import Loader from "@/components/loader";
import { baseUrl, companyID } from "@/util";
const AboutPage = async () => {
  // const images = [
  //   img1,
  //   img1_2,
  //   img2,
  //   img3,
  //   img4,
  //   img5,
  //   img6,
  //   img7,
  //   img8,
  //   img9,
  //   img10,
  //   img11,
  //   render22,
  //   render8,
  //   render17,
  //   bar1,
  //   bar2,
  //   bar3,
  //   bar4,
  //   bar5,
  //   render6,
  //   render23,
  //   new1,
  //   new2,
  //   new3,
  //   new4,
  //   new5,
  //   new6,
  //   new7,
  //   new9,
  //   new10,
  //   new11,
  //   new12,
  //   new13,
  // ];
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Listen for when the document has finished loading all styles and resources
  //   const handleLoad = () => {
  //     setLoading(false); // Stop loading once styles and other resources are loaded
  //   };

  //   if (document.readyState === "complete") {
  //     // If the document is already fully loaded, stop the loader immediately
  //     setLoading(false);
  //   } else {
  //     // Add a listener to handle when the Homepage's resources have fully loaded
  //     window.addEventListener("load", handleLoad);
  //   }

  //   // Cleanup event listener
  //   return () => {
  //     window.removeEventListener("load", handleLoad);
  //   };
  // }, []);
  // if (loading) {
  //   return <Loader />;
  // }
  let data = await fetch(`${baseUrl}/media/${companyID}`, {
    cache: "no-store",
  });
  let images = await data.json();

  return (
    <div className={styles.pageContainer}>
      <div className={styles.content}>{<Projects imgs={images} />}</div>
    </div>
  );
};

export default AboutPage;
