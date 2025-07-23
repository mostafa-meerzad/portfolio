"use client";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Easing, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import me from "./assets/me.png";

const Hero = () => {
  const [isHovering, setIsHovering] = useState(false);
  const router = useRouter();

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
          <HoverBorderGradient
            containerClassName="rounded-lg"
            onClick={() => router.push("/contact")}
          >
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

      <motion.div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="flex justify-center items-center col-start-1 col-end-2 row-start-2 md:row-start-1 md:col-start-4 md:col-end-8 lg:place-self-end lg:mx-0 mx-auto size-[400px] md:size-[380px] lg:size-[500px] overflow-hidden relative rounded-full shadow-[0_20px_40px_rgba(50,50,93,0.45),0_16px_30px_rgba(0,0,0,0.35)]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="absolute inset-0 z-0 rounded-full pointer-events-none"
          style={{ filter: "blur(4px)" }}
          initial={{
            background:
              "radial-gradient(20.7% 50% at 50% 0%, #ffffff 0%, rgba(255,255,255,0) 100%)",
          }}
          animate={{
            background: [
              `radial-gradient(20.7% 50% at 50% 0%, ${
                isHovering ? "#1313e9" : "#ffffff"
              } 0%, rgba(255,255,255,0) 100%)`,
              "radial-gradient(16.6% 43.1% at 0% 50%, #ffffff 0%, rgba(255,255,255,0) 100%)",
              `radial-gradient(20.7% 50% at 50% 100%, ${
                isHovering ? "#800080" : "#ffffff"
              } 0%, rgba(255,255,255,0) 100%)`,
              "radial-gradient(16.2% 41.2% at 100% 50%, #ffffff 0%, rgba(255,255,255,0) 100%)",
              `radial-gradient(20.7% 50% at 50% 0%, ${
                isHovering ? "#1313e9" : "#ffffff"
              } 0%, rgba(255,255,255,0) 100%)`,
            ],
          }}
          transition={{
            duration: 5,
            ease: "linear",
            repeat: Infinity,
          }}
        />

        <div className="size-[99.5%] bg-[url('/avatar-bg-pattern.png')]  dark:bg-[url('/avatar-bg-pattern-dark.png')] bg-contain overflow-hidden relative rounded-full">
          <Image
            src={me}
            alt="Mostafa"
            width={600}
            height={600}
            className="relative z-10 w-full h-full object-contain rounded-full transition-transform duration-500 hover:scale-105"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
