"use client";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { m as motion } from "framer-motion";
import Link from "next/link";
import { socialMedia } from "../constants/constants";

const SocialMedia = () => {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="h2 mb-10"
      >
        Connect with me on social media
      </motion.h2>

      <motion.ul
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-wrap justify-center md:justify-center gap-5 lg:gap-8 lg:max-w-4xl mx-auto px-5 md:px-0"
      >
        {socialMedia.map(
          ({ Img, hover, href, opts: { ariaLabel, rel, target }, big }) => (
            <motion.li
              key={href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`${big ? "w-auto md:w-[45%]" : ""}`}
            >
              <HoverBorderGradient containerClassName="w-full py-1">
                <Link
                  target={target}
                  rel={rel}
                  aria-label={ariaLabel}
                  href={href}
                  className="flex items-center justify-center gap-2  px-3 sm:px-8 md:px-5 w-full h-full"
                >
                  <motion.span
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-center justify-center"
                  >
                    <Img className="size-6" />
                  </motion.span>
                  <motion.p
                    whileHover={{ x: 4 }}
                    transition={{ type: "tween", duration: 0.2 }}
                    className="font-medium"
                  >
                    {hover}
                  </motion.p>
                </Link>
              </HoverBorderGradient>
            </motion.li>
          )
        )}
      </motion.ul>
    </>
  );
};

export default SocialMedia;
