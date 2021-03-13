import React from "react";
import { motion } from "framer-motion";

const Trans = ({ children }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: "-100%",
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: "-100%",
      }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

export default Trans;
