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

  return (
    <>
      <motion.div
        variants={upContainerVariant}
        initial="hidden"
        animate="visible"
        className={`${styles.navContainer} ${
          scrolled ? `${styles.scrolled}` : styles.default
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
                <li className={pathname === "/home/" ? `${styles.active}` : ""}>
                  <Link href="/home/">Home </Link>
                </li>
                <li
                  className={
                    pathname.includes("about") ? ` ${styles.active}` : ""
                  }
                >
                  <Link href="/home/about">About </Link>
                </li>
                <li
                  className={
                    pathname.includes("vision") ? ` ${styles.active}` : ""
                  }
                >
                  <Link href="/home/vision">vision </Link>
                </li>
                <li
                  className={
                    pathname.includes("project") ? ` ${styles.active}` : ""
                  }
                >
                  <Link href="/home/project">project </Link>
                </li>
                <li
                  className={
                    pathname.includes("contact") ? ` ${styles.active}` : ""
                  }
                >
                  <Link href="/home/contact">contact </Link>
                </li>
                <li
                  className={
                    pathname.includes("about") ? ` ${styles.active}` : ""
                  }
                >
                  <Link href="/home/about">
                    <button className={styles.talk}>Talk to us</button>{" "}
                  </Link>
                </li>

                {/* <li className={`${styles.dropbtn}`}>
                  <span
                    className={
                      pathname.includes("/home/individual") ||
                      pathname.includes("/home/school")
                        ? `${styles.active} ${styles.dropbtn}`
                        : `${styles.dropbtn}`
                    }
                  >
                    Subscriptions
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                    >
                      <path
                        d="M11.6538 2.00047L6.00002 7.6543L0.346191 2.00047L1.40002 0.946646L6.00002 5.54665L10.6 0.946646L11.6538 2.00047Z"
                        fill="black"
                      />
                    </svg>
                  </span> */}
                {/* <div className={styles.dropdown}>
                    <ul className={styles["dropdown-content"]}>
                      <Link href="/home/individual">
                        <li>Individual</li>
                      </Link>
                      <Link href="/home/school">
                        <li>Schools</li>
                      </Link>
                    </ul>
                  </div> */}
                {/* </li> */}
                {/* <li className={styles.dropbtn}>
                  <span
                    className={
                      pathname.includes("/home/educational-service")
                        ? `${styles.active} ${styles.dropbtn}`
                        : `${styles.dropbtn}`
                    }
                  >
                    Our Services
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                    >
                      <path
                        d="M11.6538 2.00047L6.00002 7.6543L0.346191 2.00047L1.40002 0.946646L6.00002 5.54665L10.6 0.946646L11.6538 2.00047Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                  <div className={styles.dropdown}>
                    <ul className={styles["dropdown-content"]}>
                      <Link href="/home/educational-service">
                        <li>Educational</li>
                      </Link>
                    </ul>
                  </div>
                </li>
                <li
                  className={
                    pathname.includes("/home/contact-us")
                      ? ` ${styles.active}`
                      : ""
                  }
                >
                  <Link href="/home/contact-us">Contact us </Link>
                </li> */}
              </ul>
            </div>
          </nav>
        </div>
      </motion.div>

      <div
        className={`${styles.slidingNav} ${
          scrolled ? `${styles.scrolled}` : styles.default
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
