"use client";

import { GoPlus } from "react-icons/go";
import Link from "next/link";
import React, { useRef } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion, useInView } from "motion/react";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";
import { useAnimationVariants } from "@/lib/use-reduced-motion";
import { tutorialProjects } from "../constants/projects";

const TutorialProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const stagger = useAnimationVariants(staggerContainer);
  const fade = useAnimationVariants(fadeUp);

  return (
    <section
      className={
        "flex flex-col justify-between items-start relative section-padding gap-5 "
      }
    >
      <div className="flex justify-start items-center gap-3 absolute badge-position font-courier tracking-wide text-xs text-muted-foreground/70 uppercase">
        Tutorial projects
        <div className={"w-14 h-[1px] bg-muted-foreground/30"} />
      </div>
      <p className={"font-courier text-muted-foreground/70 text-sm"}>
        Tutorial-based projects built while mastering my skills.
      </p>
      <motion.div
        ref={ref}
        className={
          "grid lg:grid-cols-3 border border-primary/20 rounded-xl overflow-hidden"
        }
        variants={stagger}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {tutorialProjects.map((project) => (
          <motion.div
            key={project.name}
            variants={fade}
            className={`flex flex-col items-start justify-start gap-5 border border-primary/8 px-7 py-8 w-full bg-gradient-to-bl  to-darkblue from-gray-500/10`}
          >
            <h3 className={"text-xl font-georgia text-white/80 "}>
              {project.name}
            </h3>
            <p className={`font-courier text-muted-foreground/80 text-sm  `}>
              {project.description}
            </p>

            <ul className={"flex flex-wrap md:flex-row gap-3"}>
              {project.technologies.map((tech, i) => (
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

            <div className={"flex flex-row gap-5 mt-2"}>
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
              >
                <Link
                  target={"_blank"}
                  href={project.github!}
                  rel={"noopener noreferrer"}
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
                  target={"_blank"}
                  href={project.preview!}
                  rel={"noopener noreferrer"}
                  className={
                    " flex justify-center items-center gap-2 border border-primary/20 px-6 py-1 rounded-sm bg-primary/10 font-courier text-xs text-primary"
                  }
                >
                  Preview <MdOutlineArrowOutward />
                </Link>
              </motion.div>
            </div>
            <em className={"text-xs text-muted-foreground"}>
              {project.source}
            </em>
          </motion.div>
        ))}
        <motion.a
          href={"https://github.com/mostafa-meerzad"}
          target={"_blank"}
          variants={fade}
          className={
            "flex flex-col justify-center items-center max-lg:h-64 text-center border border-primary/8 text-muted-foreground bg-radial from-primary/10 to-darkblue group md:col-span-2"
          }
        >
          <GoPlus className={"size-8 group-hover:size-12 transition-all"} />
          <span>
            <strong className={"font-georgia text-primary/70"}>160+</strong>{" "}
            more on
          </span>
          <span>github.com/mostafa-meerzad</span>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default TutorialProjects;
