"use client";
import { Button } from "@/components/ui/button";
import GlowBorderButton from "@/components/ui/GlowBorderButton";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-[auto_auto] gap-y-16 py-10 md:grid-cols-7 md:items-end lg:items-center">
      {/* ------------------ title section --------------------- */}
      <motion.div
        className="col-start-1 col-end-2 row-start-1 md:col-start-1 md:col-end-6 flex flex-col items-center md:items-start gap-2 md:gap-1 lg:gap-6 z-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.2,
            },
          },
        }}
      >
        <motion.p
          className="flex justify-start items-baseline gap-1 font-bold text-[2.5rem] md:text-[2.8rem] lg:text-5xl"
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          Hello{" "}
          <motion.span
            className="w-2 h-2 bg-blue-500 rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 300 }}
          />
        </motion.p>

        <motion.div
          className="flex justify-start items-baseline gap-1 relative"
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <motion.div
            className="inline-block h-[2px] bg-blue-500 absolute bottom-0 "
            initial={{ x: "-50%", scaleX: 0, opacity: 1 }}
            animate={{
              x: "130%",
              scaleX: [0, 1, 0.2],
              opacity: 0,
            }}
            transition={{
              delay: 0.9,
              duration: 0.7,
              ease: "easeInOut",
            }}
            style={{
              width: "8rem",
              transformOrigin: "left",
              filter: "drop-shadow(0 0 6px rgba(59, 130, 246, 0.6))",
            }}
          />

          <p className="font-medium text-[2.1rem]  md:text-[2.1rem] lg:text-4xl ">
            I&apos;m{" "}
            <motion.span
              className="font-semibold inline-block ml-1"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.3, ease: "easeOut" }}
            >
              Mostafa
            </motion.span>
          </p>
        </motion.div>

        <motion.p
          className="text-[2.4rem] md:text-[2.8rem] lg:text-5xl font-bold"
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          Full Stack Developer
        </motion.p>

        <motion.div
          className="flex justify-start gap-10 mt-5 md:mt-12"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <GlowBorderButton>
            <Button>Got a project?</Button>
          </GlowBorderButton>
          <GlowBorderButton>
            <Button>My resume</Button>
          </GlowBorderButton>
        </motion.div>
      </motion.div>

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
