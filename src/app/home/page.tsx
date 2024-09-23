"use client";
import Categories from "@/app/home/components/categories";
import Header from "@/app/home/components/header";
import OurProjects from "@/app/home/components/ourProjects";
import React, { useEffect, useState } from "react";
import Mission from "./components/mission";
import Footer from "./components/footer";
import ContactSection from "./components/contactSection";
import CountDownSection from "./components/countDownSection";
import AboutUS from "./components/aboutUs";
import CustomerJourney from "./components/customerJourney";
import Projects from "./components/projects";
import Services from "./components/services";
import Team from "./components/team";
import Loader from "@/components/loader";

const HomePage = () => {
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
    <div style={{ minHeight: "100dvh" }}>
      <Header />
      <AboutUS />
      <CountDownSection />
      <CustomerJourney />
      <Projects />
      <Services />
      <Team />
      {/* <OurProjects /> */}
      {/* <Categories /> */}
      {/* <Mission /> */}
      {/* <ContactSection /> */}
    </div>
  );
};

export default HomePage;
