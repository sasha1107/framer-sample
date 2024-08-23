"use client";

import { motion, useScroll } from "framer-motion";

const Progress = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="h-1 bg-black w-dvw sticky top-[60px] left-0 origin-left"
    />
  );
};

export default Progress;
