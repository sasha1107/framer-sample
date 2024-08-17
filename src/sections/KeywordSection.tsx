"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const KeywordSection = () => {
  return (
    <section className="h-main p-40 flex justify-center items-center">
      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="show"
        className="grid grid-cols-3 gap-12"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.li variants={item}>
          <Card className="w-80 border-0 shadow-none">
            <CardHeader>
              <CardTitle># Card 1</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <p className="bg-slate-100 p-4 rounded-sm">
                Card ContentCard ContentCard Content
              </p>
              <p className="text-sm text-slate-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nesciunt odio consectetur
              </p>
            </CardContent>
            <CardFooter className="justify-end hover:underline hover:cursor-pointer">
              <p>Card Footer -&gt;</p>
            </CardFooter>
          </Card>
        </motion.li>
        <motion.li variants={item}>
          <Card className="w-80 border-0 shadow-none">
            <CardHeader>
              <CardTitle># Card 2</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <p className="bg-slate-100 p-4 rounded-sm">
                Card ContentCard ContentCard Content
              </p>
              <p className="text-sm text-slate-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nesciunt odio consectetur
              </p>
            </CardContent>
            <CardFooter className="justify-end hover:underline hover:cursor-pointer">
              <p>Card Footer -&gt;</p>
            </CardFooter>
          </Card>
        </motion.li>
        <motion.li variants={item}>
          <Card className="w-80 border-0 shadow-none">
            <CardHeader>
              <CardTitle># Card 3</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <p className="bg-slate-100 p-4 rounded-sm">
                Card ContentCard ContentCard Content
              </p>
              <p className="text-sm text-slate-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nesciunt odio consectetur
              </p>
            </CardContent>
            <CardFooter className="justify-end hover:underline hover:cursor-pointer">
              <p>Card Footer -&gt;</p>
            </CardFooter>
          </Card>
        </motion.li>
      </motion.ul>
    </section>
  );
};

export default KeywordSection;
