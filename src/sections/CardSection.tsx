"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};
const CardSection = () => {
  return (
    <section className="h-main p-20 flex justify-center items-center">
      <div className="flex flex-col gap-8 items-center">
        <h1 className="text-3xl font-medium">Lorem ipsum dolor</h1>
        <p className="text-slate-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <div className="grid grid-cols-3 gap-4 mt-8">
            <motion.div variants={cardVariants}>
              <Card className="w-80 hover:scale-105 transition-all">
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                </CardHeader>
                <CardContent className="">
                  <p>Card Content</p>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>
            </motion.div>
            <motion.div className="card" variants={cardVariants}>
              <Card className="w-80 hover:scale-105 transition-all">
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                </CardHeader>
                <CardContent className="">
                  <p>Card Content</p>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>
            </motion.div>
            <motion.div className="card" variants={cardVariants}>
              <Card className="w-80 hover:scale-105 transition-all">
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                </CardHeader>
                <CardContent className="">
                  <p>Card Content</p>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CardSection;
