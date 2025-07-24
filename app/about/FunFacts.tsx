"use client";
import { LazyMotion, domAnimation, easeOut, m as motion } from "framer-motion";
import { funFacts } from "../constants/funFacts";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: easeOut },
  },
};

const titleVariant = {
  hidden: { opacity: 0, y: -20, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: easeOut },
  },
};

const FunFacts = () => {
  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        className="flex flex-col border rounded-xl px-5 py-8 background"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
      >
        <motion.h2 className="h2 mb-10 text-center" variants={titleVariant}>
          Fun Facts About Me
        </motion.h2>

        <motion.ul
          className="flex flex-col gap-5 md:flex-row flex-wrap md:justify-between md:items-center"
          variants={container}
        >
          {funFacts.map(({ title, Icon, desc }) => (
            <motion.li
              key={title}
              className="flex flex-col items-center md:items-start md:w-80 lg:w-96 xl:w-64 gap-2"
              variants={item}
            >
              <h3 className="flex items-center gap-3 text-2xl font-semibold">
                {title} <Icon className="size-7" />
              </h3>
              <p className="text-md leading-tight">{desc}</p>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </LazyMotion>
  );
};

export default FunFacts;
