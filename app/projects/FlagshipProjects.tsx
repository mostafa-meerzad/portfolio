"use client";

import {
  flagshipProjects,
  ProductionType as FlagshipType,
} from "@/app/constants/projects";
import { Card } from "@/components/ui/card";
import { staggerContainer, staggerItem } from "@/lib/motion-variants";
import { useAnimationVariants } from "@/lib/use-reduced-motion";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FaArrowTurnUp } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";

type Props = FlagshipType & { index: number };
const Project = ({
  name,
  description,

  desktopImg,
  mobileImg,
  preview,
  technologies,
  badges,
  isPublic,
  subtitle,
  index: i,
}: Props) => {
  const item = useAnimationVariants(staggerItem);
  const isEven = i % 2 === 0;
  return (
    <motion.li className=" " variants={item}>
      <motion.div
        whileHover={{ y: -3, borderColor: "rgba(62,207,142,0.2)" }}
        transition={{ duration: 0.2 }}
        className="rounded-lg border border-transparent [will-change:transform]"
      >
        <Card
          className={`grid grid-cols-1 max-lg:grid-rows-auto_ifr lg:grid-cols-2 xl:grid-rows-[28rem] border-0 p-0  ${isEven ? "bg-gradient-to-r border-l-2 border-l-primary" : "bg-gradient-to-l border-r-2 border-r-primary"} from-primary/20 to-[rgba(10,10,15,0.9)] relative`}
        >
          <div
            className={`max-lg:row-start-1 max-lg:row-end-2 ${isEven ? "lg:col-start-2 lg:pl-2" : "lg:col-start-1 lg:pr-2"} row-start-1 flex flex-col h-full items-start justify-around gap-5 px-5 py-8 lg:p-10`}
          >
            <ul className={"flex flex-wrap lg:flex-row gap-3"}>
              {badges.map((item, index) => (
                <li
                  key={index}
                  className={` px-4 py-1 border rounded-full text-muted-foreground text-[.7rem] font-courier w-fit ${index === 0 ? "bg-primary/20 border-primary/40" : "bg-muted/70 border-muted-foreground/20"} cursor-default`}
                >
                  {item}
                </li>
              ))}
            </ul>
            <h2 className="text-3xl font-semibold font-georgia">{name}</h2>
            <h3
              className={
                "flex items-center justify-center gap-2 text-[.8rem] text-primary/50 font-courier"
              }
            >
              <FaArrowTurnUp className={"size-3 rotate-90"} />
              {subtitle}
            </h3>
            <p className=" text-base text-muted-foreground/80 lg:text-start font-courier ">
              {description}
            </p>
            <ul className="flex gap-2 flex-wrap">
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
            <div className="flex  gap-10 w-full justify-start">
              {isPublic && preview ? (
                <motion.div
                  className="[will-change:transform]"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                >
                  <Link
                    href={preview.href}
                    target="_blank"
                    rel={"noopener noreferrer"}
                    className={
                      "flex  justify-center items-center  gap-2 border-primary bg-primary/20 text-primary !px-5 !py-2 rounded-md font-courier text-sm"
                    }
                  >
                    {preview.title} <MdOutlineArrowOutward />
                  </Link>
                </motion.div>
              ) : (
                <div
                  className={
                    "px-5 py-2 bg-darkblue/20 text-muted-foreground/50 text-xs border rounded-md font-courier"
                  }
                >
                  Internal · not public
                </div>
              )}
            </div>
          </div>
          <motion.div
            className={`max-lg:row-start-2 max-lg:row-end-3 ${isEven ? "lg:col-start-1 lg:pr-0 lg:pl-8" : "lg:col-start-2 lg:pl-0 lg:pr-8"} row-start-1 px-5 pb-8  lg:py-10 [will-change:transform]`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Image
              width={800}
              height={800}
              placeholder="blur"
              aria-label="card-image"
              alt={name}
              src={desktopImg}
              className="w-full h-full object-cover object-top-left rounded-lg hidden sm:block sm:object-center"
            />
            <Image
              width={400}
              height={400}
              placeholder="blur"
              aria-label="card-image"
              alt={name}
              src={mobileImg}
              className="w-full h-full object-contain object-top rounded-lg sm:hidden"
            />
          </motion.div>
        </Card>
      </motion.div>
    </motion.li>
  );
};

const FlagshipProjectsList = ({ limit }: { limit?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const stagger = useAnimationVariants(staggerContainer);

  return (
    <section className={"relative flex flex-col"}>
      <div className="flex justify-start items-center gap-3 absolute badge-position font-courier tracking-wide text-xs text-muted-foreground/70 uppercase">
        Personal Projects · Flagship
        <div className={"w-14 h-[1px] bg-muted-foreground/30"} />
      </div>

      <motion.ul
        ref={ref}
        className="flex flex-col gap-2 section-padding  relative "
        variants={stagger}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {flagshipProjects.slice(0, limit).map((item, index) => (
          <Project {...item} index={index} key={index} />
        ))}
      </motion.ul>
    </section>
  );
};

export default FlagshipProjectsList;
