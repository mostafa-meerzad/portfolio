"use client";
import React, { useEffect, useRef, useState } from "react";
import { personalProjects, ProjectType } from "../constants/projects";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion, useInView } from "motion/react";
import type { Variants } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/motion-variants";
import { useAnimationVariants } from "@/lib/use-reduced-motion";

type Props = ProjectType & { index: number; itemVariants: Variants };
const Project = ({
  type,
  name,
  description,
  technologies,
  github,
  preview,
  index,
  itemVariants,
}: Props) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsLargeScreen(window.innerWidth >= 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);
  const isLast = index === personalProjects.length - 1;
  const position = index + 1;
  const isSpecial = isLargeScreen
    ? position % 4 === 1 || position % 4 === 0
    : index % 2 === 0;
  return (
    <motion.li
      variants={itemVariants}
      className={`flex flex-col gap-5 px-5 md:px-7 py-8 w-full borderr border-transparent rounded-lg [will-change:transform] ${isLast && "col-span-2"} ${isSpecial ? "border-lr border-primary/70 rounded-tl-lg rounded-bl-lg bg-gradient-to-r to-[rgba(10,10,15,0.6)]/20 from-primary/10" : "max-lg:border-r lg:border-lr bg-gradient-to-l border-gray-500/60 rounded-tr-lg lg:rounded-tl-lg rounded-br-lg lg:rounded-bl-lg lg:bg-gradient-to-r to-[rgba(10,10,15,0.6)]/10 from-gray-500/8"}`}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      style={
        isSpecial
          ? { borderInlineStart: "1px solid #3ecf8e" }
          : { borderInlineStart: "1px solid #6a7282" }
      }
    >
      <span className={"text-sm text-muted-foreground/60 font-courier"}>
        {type}
      </span>
      <h3 className={"text-2xl font-georgia"}>{name}</h3>
      <p
        className={`font-courier text-muted-foreground/80 text-sm ${isLast && "md:max-w-2/3"} `}
      >
        {description}
      </p>

      <ul className={"flex flex-wrap md:flex-row gap-3"}>
        {technologies.map((tech, i) => (
          <motion.li
            key={i}
            className={
              "border border-muted px-3 py-0.5 rounded-full bg-muted/30 text-[.65em] font-courier text-muted-foreground/70 [will-change:transform] cursor-default"
            }
            whileHover={{
              borderColor: "rgba(62,207,142,0.3)",
              color: "rgba(255,255,255,0.7)",
            }}
            transition={{ duration: 0.15 }}
          >
            {tech}
          </motion.li>
        ))}
      </ul>

      <div className={"flex flex-row gap-5 mt-5"}>
        <motion.div
          className="[will-change:transform]"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.15 }}
        >
          <Link
            href={github!}
            rel={"noopener noreferrer"}
            target={"_blank"}
            className={
              "border border-muted-foreground/30 px-6 py-1 rounded-sm bg-muted/20 font-courier text-xs"
            }
          >
            GitHub
          </Link>
        </motion.div>
        <motion.div
          className="[will-change:transform]"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.15 }}
        >
          <Link
            href={preview!}
            rel={"noopener noreferrer"}
            target={"_blank"}
            className={
              " flex justify-center items-center gap-2 border border-primary/20 px-6 py-1 rounded-sm bg-primary/10 font-courier text-xs text-primary"
            }
          >
            Preview <MdOutlineArrowOutward />
          </Link>
        </motion.div>
      </div>
    </motion.li>
  );
};

const PersonalProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const stagger = useAnimationVariants(staggerContainer);
  const item = useAnimationVariants(staggerItem);

  return (
    <section
      className={"flex justify-between items-center relative section-padding "}
    >
      <div className="flex justify-start items-center gap-3 absolute badge-position font-courier tracking-wide text-xs text-muted-foreground/70 uppercase">
        Personal projects
        <div className={"w-14 h-[1px] bg-muted-foreground/30"} />
      </div>

      <motion.ul
        ref={ref}
        className={" flex flex-col lg:grid md:grid-cols-2  rounded-xl gap-2"}
        variants={stagger}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {personalProjects.map((project, index) => (
          <Project {...project} index={index} key={index} itemVariants={item} />
        ))}
      </motion.ul>
    </section>
  );
};

export default PersonalProjects;
