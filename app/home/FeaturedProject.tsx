"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { scaleIn } from "@/lib/motion-variants";
import { useAnimationVariants } from "@/lib/use-reduced-motion";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import TechStacks from "../_components/TechStacks";
import { fixrProjectImages, posProjectImages } from "../constants/projects";

const posTechs = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Prisma",
  "MySQL",
];

const fixrTechs = [
  "NestJS",
  "Prisma",
  "PostgreSQL",
  "Next.js",
  "React Native",
  "Expo",
];

const FeaturedProject = () => {
  const posRef = useRef(null);
  const fixrRef = useRef(null);
  const posInView = useInView(posRef, { once: true, margin: "-80px" });
  const fixrInView = useInView(fixrRef, { once: true, margin: "-80px" });
  const scale = useAnimationVariants(scaleIn);

  return (
    <div>
      {/* POS project  */}
      <section
        className={
          "grid xl:grid-cols-2   section-padding bg-gradient-to-r from-[rgba(10,10,15,0.6)]/20 to-[rgba(10,10,15,0.9)] relative "
        }
      >
        <div className="flex justify-center items-center gap-3 absolute badge-position font-courier tracking-wide text-xs text-muted-foreground/70 uppercase">
          featured work
          <div className={"w-14 h-[1px] bg-muted-foreground/30"} />
        </div>
        <motion.div
          ref={posRef}
          variants={scale}
          initial="hidden"
          animate={posInView ? "visible" : "hidden"}
          className={"flex flex-col gap-8 [will-change:transform]"}
          transition={{ duration: 0.2 }}
        >
          <div
            className={
              "bg-primary/15 text-primary border border-primary/40 w-fit px-4 py-0.5 text-xs rounded-full font-courier"
            }
          >
            Professional · Webistan.cloud
          </div>
          <h2 className={"text-3xl font-georgia"}>POS System</h2>
          <p
            className={
              "text-muted-foreground font-light font-courier text-sm lg:max-w-4/5"
            }
          >
            Full-stack point-of-sale platform for a local pet supplies business.
            Manages sales, inventory, suppliers, customers, deliveries, and
            reporting across multiple branches. Currently live across 3
            branches.
          </p>
          <ul className="flex justify-start flex-wrap gap-1.5">
            {posTechs.map((tech, index) => (
              <TechStacks tech={tech} key={index} />
            ))}
          </ul>
          <div className="flex gap-8 md:gap-4  ">
            <Button
              variant={"outline"}
              disabled={true}
              className={"text-muted-foreground w-[45%]"}
            >
              Internal App
            </Button>
          </div>
        </motion.div>
        <motion.div
          className={
            "flex justify-center items-center max-xl:mt-14  sm:px-5 md:px-20 [will-change:transform]"
          }
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Carousel className="w-full  ">
            <CarouselContent className="-ml-1 ">
              {posProjectImages.map((img, index) => (
                <CarouselItem key={index} className=" pl-1 lg:basis-full ">
                  <div className="">
                    <Card>
                      <CardContent className=" h-[28rem] md:h-[19rem]">
                        <Image
                          src={img}
                          alt={"Screenshot of Webistan.cloud POS System"}
                          className={
                            "size-full max-md:hidden  object-cover rounded-md"
                          }
                        />
                        <Image
                          src={img}
                          alt={"Screenshot of Webistan.cloud POS System"}
                          className={
                            "size-full md:hidden object-contain rounded-sm"
                          }
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className={"max-md:hidden text-primary"} />
            <CarouselNext className={"max-md:hidden text-primary"} />
          </Carousel>
        </motion.div>
      </section>

      {/* Fixr project */}
      <section
        className={
          "grid xl:grid-cols-2   section-padding bg-gradient-to-r from-[rgba(10,10,15,0.9)] to-[rgba(10,10,15,0.6)]/20 relative "
        }
      >
        <motion.div
          className={
            "flex justify-center items-center max-xl:mt-14 max-xl:order-2  sm:px-5 md:px-20 [will-change:transform]"
          }
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Carousel className="w-full  ">
            <CarouselContent className="-ml-1 ">
              {fixrProjectImages.map((img, index) => (
                <CarouselItem key={index} className=" pl-1 lg:basis-full ">
                  <div className="">
                    <Card>
                      <CardContent className=" h-[28rem] md:h-[19rem]">
                        <Image
                          width={600}
                          height={1000}
                          src={img}
                          alt={"Screenshot of the Fixr mobile app"}
                          className={
                            "size-full max-md:hidden  object-contain rounded-md"
                          }
                        />
                        <Image
                          width={600}
                          height={1000}
                          src={img}
                          alt={"Screenshot of the Fixr mobile app"}
                          className={
                            "size-full md:hidden object-contain rounded-sm"
                          }
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className={"max-md:hidden text-primary"} />
            <CarouselNext className={"max-md:hidden text-primary"} />
          </Carousel>
        </motion.div>
        <motion.div
          ref={fixrRef}
          variants={scale}
          initial="hidden"
          animate={fixrInView ? "visible" : "hidden"}
          className={
            "flex flex-col gap-8 max-xl:order-1 [will-change:transform]"
          }
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-wrap gap-2">
            <div
              className={
                "bg-primary/15 text-primary border border-primary/40 w-fit px-4 py-0.5 text-xs rounded-full font-courier"
              }
            >
              Personal · AI-first · Solo-built
            </div>
            <div
              className={
                "bg-amber-400/10 text-amber-400/90 border border-amber-400/40 w-fit px-4 py-0.5 text-xs rounded-full font-courier"
              }
            >
              Pre-Launch
            </div>
          </div>
          <h2 className={"text-3xl font-georgia"}>Fixr</h2>
          <p
            className={
              "text-muted-foreground font-light font-courier text-sm lg:max-w-4/5"
            }
          >
            Reverse-bidding home services marketplace for Kabul. Homeowners post
            jobs, verified experts bid using credits, and zone-aware matching
            connects the two. AI-first Solo-built end to end: NestJS + Prisma API,
            Next.js admin panel, and a React Native (Expo) mobile app with OTP
            auth and real-time chat.
          </p>
          <ul className="flex justify-start flex-wrap gap-1.5">
            {fixrTechs.map((tech, index) => (
              <TechStacks tech={tech} key={index} />
            ))}
          </ul>
          <div className="flex gap-8 md:gap-4  ">
            <Button
              variant={"outline"}
              asChild
              className={
                "w-[45%] text-primary border-primary/40 hover:bg-primary/10"
              }
            >
              <a
                href="https://github.com/mostafa-meerzad/fixr-public"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
export default FeaturedProject;
