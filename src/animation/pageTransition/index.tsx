"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
type props = {
  children: React.ReactNode;
};
const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};
const WithTransition = ({ children }: props) => {
  const pathname = usePathname();
  // console.log("pathname", pathname);
  return (
    <AnimatePresence>
      <motion.main
      // key={pathname}
      // variants={variants} // Pass the variant object into Framer Motion
      // initial="hidden" // Set the initial state to variants.hidden
      // animate="enter" // Animated state to variants.enter
      // exit="exit" // Exit state (used later) to variants.exit
      // transition={{ type: "tween", when: "beforeChildren" }} // Set the transition to linear
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
};

export default WithTransition;
