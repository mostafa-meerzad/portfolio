import React from "react";
import { funFacts } from "../constants/constants";

const FunFacts = () => {
  return (
    <div className="flex flex-col  border rounded-xl px-5 py-8 background">
      <h2 className="h2 mb-10 text-center">
        Fun Facts About Me
      </h2>
      <ul className="flex flex-col gap-5 md:flex-row flex-wrap md:justify-between md:items-center">
        {funFacts.map(({ title, Icon, desc }) => (
          <li
            key={title}
            className="flex flex-col items-center md:items-start md:w-80 lg:w-96 xl:w-64 gap-2"
          >
            <h3 className="flex items-center gap-3 text-2xl font-semibold">
              {title} <Icon className="size-7" />
            </h3>
            <p className="text-md leading-tight">{desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FunFacts;
