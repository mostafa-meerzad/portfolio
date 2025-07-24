"use client";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import {
  LazyMotion,
  domAnimation,
  easeInOut,
  easeOut,
  m as motion,
} from "framer-motion";
import { certificates } from "../constants/certificates";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const fadeRight = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOut } },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const certItem = {
  hidden: { opacity: 0, scale: 0.8, rotate: -15 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

const textStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const lineVariant = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeInOut } },
};

const Certificates = () => {
  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        className="border rounded-xl background p-5 flex flex-col lg:flex-row lg:justify-between items-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        {/* Left Text Block */}

        <motion.div
          className="flex flex-col items-center lg:items-start gap-5 lg:w-[40%]"
          variants={fadeRight}
        >
          <h2 className="h2">Certifications</h2>

          <motion.div
            className="text text-center lg:text-start flex flex-col gap-1"
            variants={textStagger}
          >
            <motion.p variants={lineVariant}>
              Here are some of the certifications I’ve earned along my
              self-taught journey —
            </motion.p>
            <motion.p variants={lineVariant}>
              from FreeCodeCamp, Coding Samurai, and others.
            </motion.p>
            <motion.p variants={lineVariant}>
              Each one marks a major milestone in my growth as a developer.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Certificate Stack */}
        <motion.div
          className="relative w-full lg:w-1/2 h-96 sm:h-[470px] md:h-[550px]"
          variants={stagger}
        >
          <div className="absolute left-[15%] sm:left-[20%] top-[35%] md:left-[20%] md:top-[28%] lg:-left-5 xl:left-10">
            {certificates.map(({ img, title }, i) => (
              <motion.div key={title} variants={certItem}>
                <Card
                  className="absolute transition-transform duration-200 hover:scale-115 hover:z-10 hover:!rotate-0 bg-[#122234] dark:dark:bg-zinc-800"
                  style={{
                    rotate: `${-45 + i * 15}deg`,
                    left: `${i * 2.5}rem`,
                    top: `-${i * 1.5}rem`,
                  }}
                >
                  <CardContent className="size-40 sm:size-56 md:size-72 overflow-hidden">
                    <Image
                      width={400}
                      height={400}
                      placeholder="blur"
                      alt={title}
                      src={img}
                      className="w-full h-full object-cover"
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </LazyMotion>
  );
};

export default Certificates;
