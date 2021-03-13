import React from "react";
import { motion } from "framer-motion";

const TransSide = ({ children, inX }) => {
  console.log(inX);
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: `${inX}`,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      exit={{
        opacity: 0,
        x: `${inX}`,
      }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default TransSide;
