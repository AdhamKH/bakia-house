import Categories from "@/app/home/components/categories";
import Header from "@/app/home/components/header";
import OurProjects from "@/app/home/components/ourProjects";
import React from "react";
import Mission from "./components/mission";
import Footer from "./components/footer";
import ContactSection from "./components/contactSection";
import CountDownSection from "./components/countDownSection";
import AboutUS from "./components/aboutUs";
import CustomerJourney from "./components/customerJourney";
import Projects from "./components/projects";
import Services from "./components/services";
import Team from "./components/team";

const HomePage = () => {
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
