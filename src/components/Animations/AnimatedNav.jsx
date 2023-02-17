import React from "react";
import { motion } from "framer-motion";
const textAnimation = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};
const AnimatedNav = ({ children }) => {
  return (
    <motion.section
      variants={textAnimation}
      initial="hidden"
      whileInView="visible"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedNav;
