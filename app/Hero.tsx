"use client";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Easing, motion } from "framer-motion";

const Hero = () => {
  const parentVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const childVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94] as Easing,
      },
    },
  };
  return (
    <div className="grid grid-cols-1 grid-rows-[auto_auto] gap-y-16 py-10 md:grid-cols-7 md:items-end lg:items-center">
      {/* ------------------ title section --------------------- */}
      <div className="col-start-1 col-end-2 row-start-1 md:col-start-1 md:col-end-6 flex flex-col items-center md:items-start gap-2 md:gap-1 lg:gap-6 z-10">
        <motion.p
          className="flex flex-col items-center md:items-start gap-1 lg:gap-4 font-bold text-[2.5rem] md:text-[2.8rem] lg:text-5xl "
          initial="hidden"
          animate="visible"
          variants={parentVariant}
        >
          <motion.span
            variants={childVariant}
            className="flex items-baseline gap-1"
          >
            Hello{" "}
            <motion.span
              className="w-2 h-2 bg-blue-500 rounded-full"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 300 }}
              style={{
                background: "radial-gradient(circle, #3B82F6, transparent)",
                boxShadow: "0 0 10px #3B82F6",
              }}
            />
          </motion.span>

          <motion.span
            className="font-medium text-[2.1rem]  md:text-[2.1rem] lg:text-4xl relative"
            variants={childVariant}
          >
            I&apos;m{" "}
            <span className="font-semibold inline-block ml-1">Mostafa</span>
            <motion.span
              className="inline-block h-[2px] bg-blue-500 absolute bottom-0 w-32 "
              initial={{ x: "-150%", scaleX: 0, opacity: 1 }}
              animate={{
                x: "-50%",
                scaleX: [0, 1, 0.2],
                opacity: 0,
              }}
              transition={{
                delay: 0.9,
                duration: 1.7,
                ease: "easeInOut",
              }}
              style={{
                width: "8rem",
                transformOrigin: "left",
                filter: "drop-shadow(0 0 6px rgba(59, 130, 246, 0.6))",
              }}
            />
          </motion.span>

          <motion.span
            className="text-[2.4rem] md:text-[2.8rem] lg:text-5xl font-bold "
            variants={childVariant}
          >
            Full Stack Developer
          </motion.span>
        </motion.p>

        <motion.div
          className="flex justify-start gap-10 mt-5 md:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <HoverBorderGradient containerClassName="rounded-lg">
            Got a project?
          </HoverBorderGradient>
          <HoverBorderGradient
            containerClassName="rounded-lg"
            className="dark:bg-white dark:text-black bg-black text-white "
          >
            My resume
          </HoverBorderGradient>
        </motion.div>
      </div>

      {/* ------------------ image section --------------------- */}
      <motion.div
        className="col-start-1 col-end-2 row-start-2 md:row-start-1 md:col-start-4 md:col-end-8 lg:place-self-end lg:mx-0 border mx-auto rounded-full size-[400px] md:size-[380px] lg:size-[500px]  bg-[url('/avatar-bg-pattern.png')] bg-contain"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6, ease: "easeOut" }}
      />
    </div>
  );
};

export default Hero;
