"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import axios from "axios";
import { baseUrl, companyID } from "@/util";
import Loader from "@/components/loader";
import CustomSlider from "@/components/Slider/Embla Carousel";
import ProjectDetails from "../components/projectDetails";

const Single = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
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
    <div className={styles.container}>
      <CustomSlider images={resedentialPhtots} />
      <ProjectDetails details={resedentialPhtots} />
    </div>
  );
};

export default Single;
