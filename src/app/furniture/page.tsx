"use client";
import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import Projects from "./components/furnitures";
import Loader from "@/components/loader";
import { baseUrl, companyID } from "@/util";
import axios from "axios";
const AboutPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const images = data;
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Show loader when starting the request
      try {
        const response = await axios.get(`${baseUrl}/media/${companyID}`);
        setData(response.data); // Save the fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className={styles.pageContainer}>
      <div className={styles.content}>{<Projects imgs={images} />}</div>
    </div>
  );
};

export default AboutPage;
