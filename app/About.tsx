"use client";
import React from "react";
import { advantages, services } from "./constants/constants";
import Image from "next/image";
// import { motion } from "framer-motion";
import { LazyMotion, domAnimation, m as motion } from "framer-motion";


const About = () => {
  return (
    <LazyMotion features={domAnimation}>
      <section className="grid grid-cols-1 md:grid-cols-5">
      {/* ---------------- services section ------------------ */}
      <ul className="hidden md:flex md:flex-col md:gap-4 md:justify-center col-start-1 col-end-4 row-start-1 ">
        {services.map(({ title, img, darkImg }) => (
          <motion.li
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            key={title}
            className="flex justify-start items-center gap-5 capitalize"
          >
            <Image
              src={img}
              alt={title}
              className="dark:hidden block w-[53px] h-[53px]"
            />
            <Image
              src={darkImg}
              alt={title}
              className="hidden dark:block w-[75px] h-[75px]"
            />
            <h3>{title}</h3>
          </motion.li>
        ))}
      </ul>
      {/* -------------------- about section --------------- */}
      <div className="col-start-3 col-end-6 row-start-1  flex flex-col items-center gap-5 justify-center text-center md:text-start ">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h2"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text"
        >
          {/* <p className="text"> */}I began my software engineering journey in
          2019, navigating through challenges and learning everything from
          scratch. What started as curiosity quickly turned into a deep passion
          for building full-stack applications that solve real problems and feel
          great to use.
          {/* </p> */}
        </motion.p>

        <motion.ul
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center gap-8 lg:gap-12 "
        >
          {advantages.map(({ value, label, Icon }) => (
            <motion.li
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              key={value}
              className="flex flex-col items-center text-center gap-1"
            >
              <h3 className="text-[1.8rem] font-bold flex items-center gap-1">
                {value}
                <Icon
                  strokeWidth={value !== "Top 10" ? 20 : 0}
                  className="size-[18px] text-blue-500"
                />
              </h3>
              <p className="w-[100px] leading-6 lg:w-[180px]">{label}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
    </LazyMotion>
  );
};

export default About;
