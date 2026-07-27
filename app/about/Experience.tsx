"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion, useInView } from "motion/react";
import {
  fadeUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
} from "@/lib/motion-variants";
import { useAnimationVariants } from "@/lib/use-reduced-motion";
import { productionProjects } from "../constants/projects";

type Props = {
  badge: string;
  title: string;
  desc: string;
  techs: string[];
  href: string;
  label: string;
  isPublic: boolean;
  className?: string;
  slideVariant: typeof slideInLeft | typeof slideInRight;
};
const Project = ({
  badge,
  title,
  desc,
  techs,
  href,
  isPublic,
  label,
  className,
  slideVariant,
}: Props) => {
  const slide = useAnimationVariants(slideVariant);

  return (
    <motion.div className={`flex flex-col gap-5 ${className}`} variants={slide}>
      <span
        className={
          "border border-primary/20 w-fit px-3 py-0.5 rounded-full text-[.7rem] bg-primary/10 text-primary font-courier -mb-2"
        }
      >
        {badge}
      </span>
      <h2 className={"text-2xl font-georgia"}>{title}</h2>
      <p className={"text-muted-foreground/70 w-4/5"}>{desc}</p>
      <ul className={"flex flex-wrap gap-1.5 text-xs font-courier"}>
        {techs.map((tech, index) => (
          <motion.li
            key={index}
            className={
              "px-2 py-0.5 border border-muted-foreground/30 rounded-full text-muted-foreground/50 [will-change:transform]"
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
      {isPublic ? (
        <motion.div
          className="[will-change:transform] w-fit"
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.15 }}
        >
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={
              "flex  items-center  gap-1 text-primary text-sm font-courier"
            }
          >
            {label} <FaArrowRightLong className={"size-3"} />
          </Link>
        </motion.div>
      ) : (
        <span className={"text-primary/50 text-sm font-courier"}>{label}</span>
      )}
    </motion.div>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const fade = useAnimationVariants(fadeUp);
  const gridStagger = useAnimationVariants(staggerContainer);

  return (
    <section
      ref={ref}
      className={
        "relative flex flex-col gap-5 section-padding !pt-10 bg-gradient-to-r from-[rgba(10,10,15,0.6)]/20 to-darkblue"
      }
    >
      <div className="flex justify-start items-center gap-3  badge-position font-courier tracking-wide text-xs text-muted-foreground/70 uppercase">
        experience
        <div className={"w-14 h-[1px] bg-muted-foreground/30"} />
      </div>

      <motion.div
        variants={fade}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={
          "flex flex-col md:flex-row max-md:gap-5 items-start md:items-center justify-between p-5 relative"
        }
      >
        <div className={"flex flex-col"}>
          <h2 className={"text-white font-georgia "}>Webistan.cloud</h2>
          <span className={"text-primary font-courier text-sm"}>
            Full Stack Developer
          </span>
        </div>
        <div className={"flex flex-col gap-1"}>
          <span className={"text-muted-foreground text-sm font-courier"}>
            Oct 2025 – Present · 10 months
          </span>
          <span className={"text-sm text-muted-foreground/60 "}>
            Kabul, Afghanistan
          </span>
        </div>

        <hr
          className={
            "w-[98%] h-[1px] bg-muted-foreground/20 absolute bottom-0 left-0 right-0 mx-auto"
          }
        />
      </motion.div>

      <motion.div
        className={"grid md:grid-cols-2 gap-10 p-5"}
        variants={gridStagger}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {productionProjects.map((item, index) => (
          <Project
            key={index}
            badge={item.badges.join(" · ")}
            title={item.name}
            desc={item.description}
            techs={item.technologies}
            href={item.preview?.href ?? ""}
            label={item.label!}
            isPublic={item.isPublic}
            slideVariant={slideInLeft}
          />
        ))}
      </motion.div>
    </section>
  );
};
export default Experience;
