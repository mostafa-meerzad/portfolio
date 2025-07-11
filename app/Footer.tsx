import React from "react";
import { socialMedia } from "./constants/constants";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center border-t bg-black/30 p-5 px-3 md:px-8 lg:px-12">
      <h2 className="font-semibold">Mostafa Meerzad</h2>
      <ul className="flex justify-center gap-5">
        {socialMedia.map(({ Img, hover, href }) => (
          <li key={href}>
            <Link href={href}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Img className="size-[25px]" />
                </TooltipTrigger>
                <TooltipContent className="font-semibold">{hover}</TooltipContent>
              </Tooltip>
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
