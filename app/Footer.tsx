import React from "react";
import { socialMedia } from "./constants/socialMedia";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center border-t background p-5 px-3 md:px-8 lg:px-12">
      <h2 className="font-semibold">Mostafa Meerzad</h2>
      <ul className="flex justify-center gap-5">
        {socialMedia
          .slice(0, 4)
          .map(({ Img, hover, href, opts: { ariaLabel, rel, target } }) => (
            <li key={href}>
              <Link
                href={href}
                rel={rel}
                target={target}
                aria-label={ariaLabel}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Img className="size-[25px]" />
                  </TooltipTrigger>
                  <TooltipContent className="font-semibold">
                    {hover}
                  </TooltipContent>
                </Tooltip>
              </Link>
            </li>
          ))}
      </ul>
    </footer>
  );
};

export default Footer;
