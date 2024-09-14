"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Image from "next/image";
import logo from "../../assets/logo.webp";
import logo2 from "../../assets/logo bakia.webp";
import SlidingPane from "../slidingPane";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { upContainerVariant } from "@/animation";
import { usePathname } from "next/navigation";
import styles from "./style.module.scss";
import { useWindowSize } from "../widthSreen";

const NavBar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState(false);

  const { push } = useRouter();
  const pathname: string = usePathname();
  const handleChange = () => {
    setOpen(!open);
  };

  const [width, height] = useWindowSize();
  useEffect(() => {
    if (width >= 1000) {
      setOpen(false);
    }
  }, [width]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  let route = pathname.split("/");
  console.log("Test", pathname);
  return (
    <>
      <motion.div
        variants={upContainerVariant}
        initial="hidden"
        animate="visible"
        className={`${styles.navContainer} ${
          scrolled ? `${styles.scrolled}` : styles.default
        } ${
          (route?.includes("about") ||
            route?.includes("form") ||
            route?.includes("project") ||
            route?.includes("furniture") ||
            route?.includes("contact")) &&
          styles.scrolled
        }`}
        transition={{ type: "tween", duration: 1, delay: 0.1 }}
      >
        <div>
          <nav className={styles.nav}>
            <div className={styles.firstDivNav}>
              <Link href="/home">
                <Image src={logo} alt="logo"></Image>
              </Link>
            </div>
            <div className={styles.secondDivNav}>
              <ul>
                <Link href="/">
                  <li
                    className={
                      pathname === "/" || pathname === "/home"
                        ? `${styles.active}`
                        : ""
                    }
                  >
                    Home
                  </li>
                </Link>
                <Link href="/about">
                  <li
                    className={
                      pathname.includes("about") ? ` ${styles.active}` : ""
                    }
                  >
                    About
                  </li>
                </Link>
                <Link href="/furniture">
                  <li
                    className={
                      pathname.includes("furniture") ? ` ${styles.active}` : ""
                    }
                  >
                    Furniture
                  </li>
                </Link>
                <Link href="/project">
                  <li
                    className={
                      pathname.includes("project") ? ` ${styles.active}` : ""
                    }
                  >
                    projects
                  </li>
                </Link>
                <Link href="/contact">
                  <li
                    className={
                      pathname.includes("contact") ? ` ${styles.active}` : ""
                    }
                  >
                    contact
                  </li>
                </Link>
                <Link href="/contact">
                  <li
                    className={
                      pathname.includes("form") ? ` ${styles.active}` : ""
                    }
                  >
                    <button className={styles.talk}>Talk to us</button>
                  </li>
                </Link>
              </ul>
            </div>
          </nav>
        </div>
      </motion.div>

      <div
        className={`${styles.slidingNav} ${
          scrolled ? `${styles.scrolled}` : styles.default
        } ${
          (route?.includes("about") ||
            route?.includes("form") ||
            route?.includes("project") ||
            route?.includes("furniture") ||
            route?.includes("contact")) &&
          styles.scrolled
        }`}
      >
        <nav>
          <ul>
            <li>
              <Link href="/home">
                <Image src={logo} alt="logo"></Image>
              </Link>
            </li>
            <li>
              <button onClick={handleChange}>
                <svg
                  className="ast-mobile-svg ast-menu2-svg"
                  fill="white"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="28"
                  viewBox="0 0 24 28"
                >
                  <path d="M24 21v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1zM24 13v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1zM24 5v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1z"></path>
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <SlidingPane open={open} setOpen={setOpen} />
    </>
  );
};

export default NavBar;
