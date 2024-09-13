"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const PageTransition = ({ children }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 1.5 }}
    >
      <AnimatePresence mode="wait">{children}</AnimatePresence>
    </motion.div>
  );
};

export default PageTransition;
