"use client";

import { cn } from "@/lib/utils";
import { twJoin } from "tailwind-merge";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-main p-20 flex justify-center items-center bg-fixed">
      <div
        className={cn(
          "w-[800px] aspect-square bg-[url('/bg.png')] bg-contain flex justify-center items-center",
          twJoin(
            process.env.NODE_ENV === "production" &&
              `bg-[url('https://sasha1107.github.io/framer-sample/bg.png')]`
          )
        )}
      >
        <motion.div
          className="text-8xl font-extrabold text-white"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          HELLO
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
