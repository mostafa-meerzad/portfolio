import Image from "next/image";
import React from "react";
import avatarPlaceHolder from "../../public/avatar-bg-pattern.png";

const AboutMe = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[0.7fr_1fr] items-center gap-8 mt-10">
      <Image
        alt="mostafa"
        src={avatarPlaceHolder}
        className="col-start-1 col-end-3 md:col-end-2 h-[300px] md:h-[300px] lg:h-[400px] border object-cover"
      />
      <p className=" text-lg lg:text-xl lg:leading-relaxed text-center max-sm:mx-auto md:text-start col-start-1 col-end-3 md:col-start-2  place-self-center px-5">
        <span className="block text-4xl mb-4">
          <span className="">Hey! I’m</span>
          <span className="font-bold block">Mostafa Meerzad</span>
        </span>{" "}
        a self-taught full-stack developer based in Kabul.
        <span className="block">
          {" "}
          After overcoming adversity, I found purpose in technology.
        </span>{" "}
        I now build web apps with modern tools like Next.js, Prisma, and
        TypeScript.
      </p>
    </div>
  );
};

export default AboutMe;
