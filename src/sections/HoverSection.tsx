"use client";

import { motion, Variants } from "framer-motion";

const textVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: -100,
    color: "black",
    rotate: 0,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
  onHover: {
    color: [
      "#fecaca",
      "#fdba74",
      "#fde68a",
      "#d9f99d",
      "#a7f3d0",
      "#99f6e4",
      "#bae6fd",
      "#c7d2fe",
      "#fbcfe8",
    ],
    rotate: [-5, 5, -5, 5, -5, 5, -5, 5, -5],
    transition: {
      duration: 2,
      ease: "linear",
      repeat: Infinity,
      repeatDelay: 0,
    },
  },
};
const text = [
  "⊂_ヽ",
  " 　＼＼ Λ＿＿Λ",
  ` 　 ＼( 'ㅅ' ) 둠칫`,
  "　　　 >　⌒ヽ",
  "　　　/ 　 へ＼",
  "　　 /　　/　＼＼ 두둠칫",
  "　　 ﾚ　ノ　　 ヽ_つ",
  "　　/　/",
  "　 /　/|",
  "　(　(ヽ 두둠칫",
  "　|　|、＼",
  "　| 丿 ＼ ⌒)",
  "　| |　　) /",
  " ノ )　　Lﾉ",
];

const HoverSection = () => {
  return (
    <section className="h-main flex justify-center items-center">
      <motion.code
        className="text-3xl font-bold  text-black cursor-pointer leading-none"
        initial="offscreen"
        whileInView="onscreen"
        whileHover="onHover"
        variants={textVariants}
      >
        {text.map((t, i) => (
          <pre key={i}>{t}</pre>
        ))}
      </motion.code>
    </section>
  );
};

export default HoverSection;
