import React from "react";
import { motion } from "framer-motion";

const AnimatedTextWord = ({ children }: any) => {
  const words = children.props.children.split(" ");
  const TagName = children.type;
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.7 * i,
      },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
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
      animate="visible"
    >
      {words.map((word: any, index: number) => (
        <motion.span
          variants={child}
          style={{ marginRight: "18px" }}
          key={index}
        >
          <TagName>{word}</TagName>
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextWord;
