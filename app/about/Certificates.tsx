import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { certificates } from "../constants/constants";
import Image from "next/image";

const Certificates = () => {
  return (
    <div className=" border rounded-xl background p-5 flex flex-col lg:flex-row lg:justify-between items-center ">
      <div className="flex flex-col items-center lg:items-start gap-5 lg:w-[40%]">
        <h2 className="text-4xl font-semibold">Certifications</h2>
        <p className="text text-center lg:text-start">
          Here are some of the certifications I’ve earned along my self-taught
          journey — from FreeCodeCamp, Coding Samurai, and others. Each one
          marks a major milestone in my growth as a developer.
        </p>
      </div>
      <div className="relative w-full lg:w-1/2 h-96 sm:h-[470px] md:h-[550px] ">
        <div className="absolute left-[15%] sm:left-[20%] top-[35%] md:left-[20%] md:top-[28%] lg:-left-5 xl:left-10">
          {certificates.map(({ img, title }, i) => (
            <Card
              key={title}
              className="absolute transition-transform duration-200 hover:scale-115 hover:z-10 hover:!rotate-0 bg-[#122234] dark:dark:bg-zinc-800"
              style={{
                rotate: `${-45 + i * 15}deg`,
                left: `${i * 2.5}rem`,
                top: `-${i * 1.5}rem`,
              }}
            >
              <CardContent className="size-40 sm:size-56 md:size-72  overflow-hidden">
                <Image
                  alt={title}
                  src={img}
                  className="w-full h-full object-cover"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
