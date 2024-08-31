"use client";

import React from "react";
import { motion } from "framer-motion";

type props = {
  children: any;
  ref?: any;
  controls?: any;
};
const AnimatedTextCharacter = ({ children, ref, controls }: props) => {
  const words = children.props.children;
  const TagName = children.type;
  const letters = Array.from(words);
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.25 * i,
      },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
      variants={container}
      initial="hidden"
      ref={ref}
      animate={controls}
    >
      {letters.map((letter: any, index: number) => (
        <motion.span variants={child} key={index}>
          <TagName>{letter === " " ? "\u00A0" : letter}</TagName>
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextCharacter;
