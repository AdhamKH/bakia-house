"use client";
import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import SectionA from "./components/sectionA";
import SectionB from "./components/sectionB";
import Loader from "@/components/loader";
const AboutPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen for when the document has finished loading all styles and resources
    const handleLoad = () => {
      setLoading(false); // Stop loading once styles and other resources are loaded
    };

    if (document.readyState === "complete") {
      // If the document is already fully loaded, stop the loader immediately
      setLoading(false);
    } else {
      // Add a listener to handle when the Homepage's resources have fully loaded
      window.addEventListener("load", handleLoad);
    }

    // Cleanup event listener
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className={styles.pageContainer}>
      <SectionA />
      <SectionB />
    </div>
  );
};

export default AboutPage;
