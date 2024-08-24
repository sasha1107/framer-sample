"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      // duration: 0.2,
      type: "spring",
      bounce: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { width: 0 },
  show: {
    width: "100%",
  },
};

const variants: Variants = {
  offscreen: {
    width: 0,
  },
  onscreen: {
    width: "100%",
    transition: {
      // type: "spring",
      // bounce: 0.4,
      duration: 1.2,
    },
  },
};
const ChartSection = () => {
  return (
    <section className="h-main p-10 md:p-40 flex justify-center items-center">
      <div className="flex flex-col gap-16 w-full">
        <div className="flex flex-col gap-8 flex-grow">
          <div className="flex gap-4 items-center">
            <span className="flex-shrink-0 text-4xl">🤔</span>
            <div className="grid grid-cols-10 flex-grow">
              <motion.div
                className="bg-slate-200 rounded-sm py-4 col-span-6"
                initial="offscreen"
                whileInView="onscreen"
                variants={variants}
              />
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <span className="flex-shrink-0 text-4xl">🤓</span>
            <motion.div
              className="grid grid-cols-10 flex-grow"
              variants={container}
              initial="hidden"
              whileInView="show"
            >
              <motion.div
                className="bg-slate-200 py-4 col-span-3 rounded-l-sm"
                variants={item}
              />
              <motion.div
                className="bg-slate-300 py-4 col-span-2"
                variants={item}
              />
              <motion.div
                className="bg-slate-400 py-4 col-span-4 rounded-r-sm"
                variants={item}
              />
            </motion.div>
          </div>
        </div>
        <Accordion type="single" collapsible className="text-center">
          <AccordionItem value="item-1" className="border-b-0">
            <AccordionTrigger className="gap-1 justify-center text-slate-500">
              <span className="text-sm">Details</span>
            </AccordionTrigger>
            <AccordionContent>
              <Card className="rounded-sm p-4">
                Yes. It adheres to the WAI-ARIA design pattern.
              </Card>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default ChartSection;
