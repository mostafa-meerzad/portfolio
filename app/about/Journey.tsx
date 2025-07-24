"use client";

import Image from "next/image";
import React from "react";
import selfBuilt from "../assets/self-built.webp";
import {
  LazyMotion,
  domAnimation,
  easeInOut,
  m as motion,
} from "framer-motion";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeInOut },
  },
};

const imageFade = {
  hidden: { opacity: 0, scale: 0.97, x: 10 },
  show: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 1.2, ease: easeInOut, delay: 0.4 },
  },
};

const container = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeInOut,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const Journey = () => {
  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_0.8fr] md:grid-rows-[0.1fr_.5fr] gap-5 justify-items-center md:justify-items-start md:items-center border background rounded-2xl py-3 md:p-5 px-3">
          {/* Title */}
          <motion.h2
            className="col-start-1 col-end-2 md:col-end-3 md:row-start-1 md:row-end-2 h2"
            variants={fadeUp}
          >
            My Journey
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            className="col-start-1 col-end-2 md:row-start-2 md:row-end-3 text-center md:text-start text px-5 md:px-0 md:self-start"
            variants={fadeUp}
          >
            My journey began in 2019 when I got accepted to Kabul University for
            software engineering. Then came challenges: COVID-19, a university
            attack, and the collapse of the government in 2021. I left college,
            but not my dream. With determination, I turned to the internet and
            taught myself full-stack development using FreeCodeCamp, YouTube,
            and tons of projects. Now, I’ve built 150+ projects, earned multiple
            certifications, and landed an internship, all self-driven.
          </motion.p>

          {/* Image */}
          <motion.div
            className="col-start-1 md:col-start-2 col-end-2 md:col-end-3 md:row-start-1 md:row-end-3 w-auto h-[380px] object-contain lg:justify-self-end rounded-xl md:object-cover"
            variants={imageFade}
          >
            <Image
              width={400}
              height={400}
              placeholder="blur"
              src={selfBuilt}
              alt="self built"
              className="w-full h-full object-contain md:object-cover rounded-xl"
            />
          </motion.div>
        </div>
      </motion.div>
    </LazyMotion>
  );
};

export default Journey;
