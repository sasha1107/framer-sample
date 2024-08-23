import { cn } from "@/lib/utils";
import { twJoin } from "tailwind-merge";

const Hero = () => {
  return (
    <section className="h-main p-20 flex justify-center items-center bg-fixed">
      <div
        className={cn(
          "w-[600px] aspect-square bg-[url('/bg.png')] bg-contain back",
          twJoin(
            process.env.NODE_ENV === "production" &&
              `bg-[url('https://sasha1107.github.io/framer-sample/bg.png')]`
          )
        )}
      />
    </section>
  );
};

export default Hero;
