"use client";

import React from "react";
import Image from "next/image";
import me from "../assets/me-vertical.png";
import Link from "next/link";
import { motion } from "motion/react";
import {
  fadeUp,
  slideInLeft,
  staggerContainer,
  staggerGithub,
  staggerItem,
} from "@/lib/motion-variants";
import { useAnimationVariants } from "@/lib/use-reduced-motion";
import { contributionPattern, githubProfile } from "@/app/constants/about";

const AboutMe = () => {
  const slidePhoto = useAnimationVariants(slideInLeft);
  const staggerBio = useAnimationVariants(staggerContainer);
  const item = useAnimationVariants(staggerItem);
  const ghStagger = useAnimationVariants(staggerGithub);
  const fade = useAnimationVariants(fadeUp);

  return (
    <section
      className={
        "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-y-8 md:gap-x-5 xl:gap-8 section-padding pt-10 bg-gradient-to-b from-[rgba(10,10,15,0.6)]/5 to-darkblue relative "
      }
    >
      <div className="flex justify-start items-center gap-3 absolute badge-position font-courier tracking-wide text-xs text-muted-foreground/70 uppercase">
        About Me
        <div className={"w-14 h-[1px] bg-muted-foreground/30"} />
      </div>
      <motion.div
        className={
          "flex flex-col xl:col-span-4 xl:self-center [will-change:transform]"
        }
        variants={slidePhoto}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.1 }}
      >
        <div className="flex flex-col relative justify-center items-center max-md:mx-auto max-md:w-full   p-2 xl:p-4 pb-4 pr-4 md:pb-2 md:pr-2">
          <div className="absolute bg-transparent size-10 xl:size-16 top-0 left-0 border-secondary border-l border-t rounded-tl-[4px]"></div>
          <div className="absolute bg-transparent size-10 lg:size-16 bottom-0 right-0  border-primary/40 border-r-1 border-b-1 rounded-br-sm "></div>
          <Image
            src={me}
            alt={"Portrait of Mostafa Meerzad"}
            className={"  w-full h-full  object-contain"}
          />
        </div>
      </motion.div>

      <motion.div
        className={
          "xl:col-span-5 xl:self-center flex flex-col justify-center items-center md:items-start gap-3 xl:p-10 xl:pt-0 "
        }
        variants={staggerBio}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={item}
          className={
            "flex md:flex-col gap-2 text-white text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-georgia  "
          }
        >
          <span className={"text-white"}>Mostafa</span>
          <span className={"text-primary "}>Meerzad</span>
        </motion.h1>
        <motion.h2
          variants={item}
          className={
            "text-xs lg:text-sm  font-courier text-muted-foreground/60 xl:text-muted-foreground/30"
          }
        >
          Full-stack Engineer · Product-Focused · AI Curious
        </motion.h2>
        <motion.p
          variants={item}
          className={
            "font-georgia text-sm lg:text-base text-[#c6c6c699] text-center md:text-start  max-w-[590px]  mt-4 leading-relaxed"
          }
        >
          Self-taught full-stack developer based in{" "}
          <strong className={"font-semibold text-white"}>
            Kabul, Afghanistan
          </strong>
          . I started in 2019 with a university seat and a lot of curiosity.
          When that path closed, I didn&apos;t stop — I opened a browser and
          <em className={"text-primary"}> taught myself </em> everything from
          scratch through FreeCodeCamp, YouTube, and relentless project
          building.
        </motion.p>
        <motion.div
          variants={item}
          className={"w-3/6 h-0.5 bg-muted/10"}
          aria-hidden
        />
        <motion.p
          variants={item}
          className={
            "font-georgia text-sm lg:text-base text-[#c6c6c699] text-center md:text-start  max-w-[590px]  mt-2 leading-relaxed"
          }
        >
          Now I&apos;m{" "}
          <em className={"text-white"}>shipping production software</em> for
          real clients at{" "}
          <strong className={"font-semibold text-primary"}>
            <Link
              href={"https://www.webistan.cloud"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Webistan.cloud
            </Link>
          </strong>{" "}
          — and I&apos;m open to my next challenge. I work across the full stack
          but what drives me is the final product: something that works
          reliably, feels polished, and makes sense to the person using it.
        </motion.p>
        <motion.div
          variants={item}
          className={"w-2/6 h-0.5 bg-darkblue/10"}
          aria-hidden
        />
        <motion.p
          variants={item}
          className={
            "font-georgia text-sm md:hidden lg:visible lg:text-base text-[#c6c6c699] text-center md:text-start 2xl:w-4/6 max-w-[590px] mt-2 leading-relaxed"
          }
        >
          <em className={"text-white"}>Clean UI isn&apos;t decoration</em> to me
          — it&apos;s part of the job. I&apos;m available for{" "}
          <strong className={"font-semibold text-white"}>remote roles</strong>{" "}
          or{" "}
          <strong className={"font-semibold text-white"}>
            onsite in Kabul
          </strong>{" "}
          — startups, product companies, or agencies that value people who take
          ownership and follow through.
        </motion.p>
      </motion.div>

      <motion.div
        className={
          "md:col-span-2 xl:col-span-3 xl:self-center mt-10 xl:mt-0 px-5 md:pr-7 max-md:pr-12 flex flex-col justify-center items-center perspective-normal"
        }
        variants={ghStagger}
        initial="hidden"
        animate="visible"
        style={{ perspective: "normal" }}
      >
        <motion.div
          variants={fade}
          className={
            "flex flex-col gap-3 px-5 xl:px-7 py-5 xl:py-6 bg-gradient-to-br from-[rgba(23,58,45,0.55)] to-[rgba(12,26,21,0.55)] rounded-xl border border-primary/20 w-full max-md:max-w-sm md:w-[28rem] lg:w-[32rem] xl:w-full xl:max-w-none font-georgia relative [will-change:transform]"
          }
          style={{ rotateY: "-18deg" }}
          whileHover={{
            y: -2,
            borderColor: "rgba(62,207,142,0.3)",
            rotateY: "-12deg",
            scale: 1.02,
          }}
          transition={{ duration: 0.2 }}
        >
          {/* Header */}
          <div className="flex justify-between items-center">
            <span className="font-courier text-xs text-gray-300 tracking-wider">
              {githubProfile.handle}
            </span>
            <span className="flex items-center gap-1.5 text-primary font-courier text-[10px] tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              {githubProfile.status}
            </span>
          </div>

          {/* Stats */}
          <div className="flex flex-col gap-3 mt-1">
            <div className="flex items-baseline gap-2">
              <span className="font-georgia text-xl text-white">
                {githubProfile.repoCount}
              </span>
              <span className="font-courier text-[10px] text-muted-foreground">
                public repositories
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-georgia text-xl text-white">
                {githubProfile.yearsLabel}
              </span>
              <span className="font-courier text-[10px] text-muted-foreground">
                active · {githubProfile.activePeriod}
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-georgia text-xl text-primary">
                {githubProfile.rankLabel}
              </span>
              <span className="font-courier text-[10px] text-muted-foreground">
                {githubProfile.rankSuffix}
              </span>
            </div>
          </div>

          {/* Contribution strip */}
          <div
            className="grid gap-[3px] mt-1"
            style={{ gridTemplateColumns: "repeat(17, 1fr)" }}
            aria-hidden
          >
            {contributionPattern.map((opacity, i) => (
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                key={i}
                className="aspect-square rounded-[2px] bg-primary"
                style={{ opacity }}
              />
            ))}
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center border-t border-primary/15 pt-3 mt-1">
            <span className="font-courier text-[10px] text-muted-foreground/60 tracking-widest uppercase">
              GitHub Account
            </span>
            <Link
              href={githubProfile.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-base leading-none hover:opacity-70 transition-opacity"
              aria-label="Visit GitHub profile"
            >
              ↗
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default AboutMe;
