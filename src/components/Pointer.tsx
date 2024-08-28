"use client";

import { useFollowPointer } from "@/hooks/useFollowPointer";
import { useRef } from "react";
import { motion } from "framer-motion";

const Pointer = () => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  return (
    <motion.div
      ref={ref}
      className="w-10 rounded-full h-10 fixed border border-slate-500 pointer-events-none"
      style={{ x, y }}
      transition={{ type: "spring" }}
    />
  );
};

export default Pointer;
