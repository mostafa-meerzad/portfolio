import Image from "next/image";
import React from "react";
import selfBuilt from "../assets/self-built.png";

const Journey = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-[1fr_0.8fr] md:grid-rows-[0.1fr_.5fr] gap-5 justify-items-center md:justify-items-start md:items-center
      border background rounded-2xl py-3 md:p-5 px-3
    "
    >
      <h2 className="col-start-1 col-end-2 md:col-end-3 md:row-start-1 md:row-end-2 h2">
        My Journey
      </h2>

      <p className="col-start-1 col-end-2 md:row-start-2 md:row-end-3 text-center md:text-start text px-5 md:px-0 md:self-start">
        My journey began in 2019 when I got accepted to Kabul University for
        software engineering. Then came challenges: COVID-19, a university
        attack, and the collapse of the government in 2021. I left college, but
        not my dream. With determination, I turned to the internet and taught
        myself full-stack development using FreeCodeCamp, YouTube, and tons of
        projects. Now, I’ve built 150+ projects, earned multiple certifications,
        and landed an internship, all self-driven.
      </p>
      <Image
        src={selfBuilt}
        alt="self built"
        className="col-start-1 md:col-start-2 col-end-2 md:col-end-3 md:row-start-1 md:row-end-3 w-auto h-[380px] object-contain lg:justify-self-end rounded-xl md:object-cover"
      />
    </div>
  );
};

export default Journey;
