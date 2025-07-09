import React from "react";
import { advantages, services } from "./constants/constants";
import Image from "next/image";

const About = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-5">
      <ul className="hidden md:flex md:flex-col md:gap-8 md:justify-center col-start-1 col-end-4 row-start-1 ">
        {services.map(({ title, img }) => (
          <li
            key={title}
            className="flex justify-start items-center gap-5 capitalize"
          >
            <Image width={50} height={50} src={img} alt={title} />
            <h3>{title}</h3>
          </li>
        ))}
      </ul>
      {/* -------------------- about section --------------- */}
      <div className="col-start-3 col-end-6 row-start-1  flex flex-col items-center gap-5 justify-center text-center md:text-start ">
        <h2 className="text-4xl font-semibold ">About me</h2>
        <p>
          I began my software engineering journey in 2019, navigating through
          challenges and learning everything from scratch. What started as
          curiosity quickly turned into a deep passion for building full-stack
          applications that solve real problems and feel great to use.
        </p>

        <ul className="flex justify-center gap-8 lg:gap-12 ">
          {advantages.map(({ value, label, Icon }) => (
            <li
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
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
