"use client";
import Image from "next/image";
import React, { useLayoutEffect, useState } from "react";
import logo from "../../assets/logo.webp";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import useInViewAnimation from "@/animation/useScroll";
import useInViewAnimationRepeat from "@/animation/useScrollRepeat";
import { useRouter } from "next/navigation";

type props = {
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const navList = {
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.07,
    },
  },
};
export const navItem = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
};
const SlidingPane: React.FC<props> = ({ open, setOpen }: props) => {
  const pathname = usePathname();
  const { push } = useRouter();

  const [openSingIn, setOpenSingIn] = React.useState<boolean>(false);
  const handlChange = () => {
    setOpenSingIn(!openSingIn);
  };
  const [openForm, setOpenForm] = React.useState<boolean>(false);
  const handleChangeForm = () => {
    setOpenForm(!openForm);
  };

  const [openOptions, setOpenOptions] = React.useState<boolean>(false);
  const { ref, controls } = useInViewAnimationRepeat();
  const handlClose = () => {
    setOpen?.(false);
    console.log("clicked");
  };

  React.useLayoutEffect(() => {
    if (pathname) {
      handlClose();
      setOpenAccorditionSecond(false);
    }
  }, [pathname]);

  const [openAccordtion, setOpenAccordition] = React.useState<boolean>(false);
  const [openAccordtionSecond, setOpenAccorditionSecond] =
    React.useState<boolean>(false);
  const [openAccordtionThird, setOpenAccorditionThird] =
    React.useState<boolean>(false);
  const hanldeChange = () => {
    return setOpenAccordition(!openAccordtion);
  };
  const hanldeChangeSecond = () => {
    return setOpenAccorditionSecond(!openAccordtionSecond);
  };
  const hanldeChangeThird = () => {
    return setOpenAccorditionThird(!openAccordtionThird);
  };

  // console.log("isLogged", isLogged);
  return (
    <>
      <div
        className={
          open
            ? `${styles.slidignOutterContainer}  ${styles.show}`
            : `${styles.slidignOutterContainer} `
        }
      >
        <div className={styles.heading}>
          <ul>
            <li className={styles.liFont}>
              <Image src={logo} alt="logo"></Image>
            </li>
            <li className={styles.liFont}>
              <button onClick={handlClose}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z"
                    fill="white"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </div>
        <div className={styles.Sliding_content}>
          <motion.ul
            ref={ref}
            variants={navList}
            initial="hidden"
            animate={controls}
            exit="hidden"
            // transition={{ duration: 5 }}
          >
            <motion.li
              variants={navItem}
              transition={{ duration: 2, delay: 3 }}
              className={styles.liFont}
            >
              <Link href="/home">Home</Link>
            </motion.li>
            <motion.li
              variants={navItem}
              transition={{ duration: 2, delay: 3 }}
              className={styles.liFont}
            >
              <Link href="/about">About us</Link>
            </motion.li>

            <motion.li variants={navItem} className={styles.liFont}>
              <Link href="/furniture">Furniture</Link>
            </motion.li>
            {/* <motion.li variants={navItem} className={styles.liFont}>
              <Link href="/project">project </Link>
            </motion.li> */}
            <motion.li variants={navItem} className={styles.liFont}>
              <div className={styles.special} onClick={hanldeChangeSecond}>
                <p>project </p>
                <button>
                  {openAccordtionSecond ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M17.6538 10.9018L12 16.5557L6.34619 10.9018L7.40002 9.84801L12 14.448L16.6 9.84801L17.6538 10.9018Z"
                        fill="white"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M6.34616 14.9009L12 9.24707L17.6538 14.9009L16.6 15.9547L12 11.3547L7.39998 15.9547L6.34616 14.9009Z"
                        fill="white"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </motion.li>
            <div
              className={
                openAccordtionSecond
                  ? `${styles.accodtion} ${styles.show}`
                  : `${styles.accodtion}`
              }
            >
              <Link href={`/commercial`}>
                <p>Commercial</p>
              </Link>
              <Link href={`/residential`}>
                <p>Resedential</p>
              </Link>
            </div>
            <motion.li variants={navItem} className={styles.liFont}>
              <Link href="/contact"> contact</Link>
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </>
  );
};

export default SlidingPane;
