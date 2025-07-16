import React from "react";
import { socialMedia } from "../constants/constants";
import Link from "next/link";

const SocialMedia = () => {
  return (
    <>
      <h2 className="h2"> Connect with me on social media:</h2>{" "}
      <ul className="flex flex-wrap justify-around  md:justify-center  gap-5 lg:gap-8 lg:max-w-3xl mx-auto px-5 md:px-0">
        {socialMedia.map(
          ({ Img, hover, href, opts: { ariaLabel, rel, target }, big }) => {
            return (
              <li
                key={href}
                className={`border rounded-xl background  w-40 ${
                  big && "w-full md:w-[45%]"
                }`}
              >
                <Link
                  target={target}
                  rel={rel}
                  aria-label={ariaLabel}
                  href={href}
                  className="flex  items-center justify-center gap-2 inset-0 py-5 px-5 sm:px-8 md:px-5"
                >
                  <Img className="size-6" />
                  <p>{hover}</p>
                </Link>
              </li>
            );
          }
        )}
      </ul>
    </>
  );
};

export default SocialMedia;
