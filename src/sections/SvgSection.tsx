"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

const pathCircleVariants = {
  from: {
    opacity: 0,
    pathLength: 0,
  },
  to: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
};

const pathCheckVariants = {
  from: {
    opacity: 0,
    pathLength: 0,
  },
  to: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
      delay: 0.5,
    },
  },
};
const SvgSection = () => {
  const [checked, setChecked] = useState(false);
  return (
    <section className="h-main flex justify-center items-center flex-col gap-8">
      <div className="w-[120px] h-[120px]">
        {checked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 120 120"
            width="120"
            height="120"
            fill="none"
          >
            <motion.path
              d="M105 60.5C105 69.8939 102.027 79.0468 96.5074 86.648C90.9876 94.2491 83.2039 99.9084 74.2712 102.816C65.3384 105.723 55.7148 105.728 46.7787 102.832C37.8425 99.9352 30.0522 94.285 24.5234 86.6904C18.9947 79.0957 16.0111 69.9463 16 60.5524C15.989 51.1585 18.951 42.0021 24.4618 34.3945C29.9727 26.7868 37.7497 21.1183 46.679 18.2007C55.6083 15.2831 65.2319 15.2661 74.1715 18.1521"
              stroke="#82dd55"
              strokeWidth="6"
              initial="from"
              whileInView="to"
              variants={pathCircleVariants}
            />
            <motion.path
              d="M31 57.8667L58.3285 84L103 28"
              stroke="#82dd55"
              strokeWidth="6"
              initial="from"
              whileInView="to"
              variants={pathCheckVariants}
            />
          </svg>
        )}
      </div>
      <div className={cn("flex gap-2")}>
        <Checkbox
          id="terms"
          checked={checked}
          disabled={checked}
          onCheckedChange={(isChecked) => isChecked && setChecked(true)}
        />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
      </div>
    </section>
  );
};

export default SvgSection;
