"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function LayoutWrapper({ children }: Props) {
  const pathname = usePathname();

  // Define background classes based on pathname
  const backgroundClass = (() => {
    if (pathname === "/")
      return "bg-[url('/bg-home-light-mobile.jpg')] dark:bg-[url('/bg-home-dark-mobile.jpg')] md:bg-[url('/bg-home-light.webp')] md:dark:bg-[url('/bg-home-dark.webp')] !bg-contain bg-repeat ";
    if (pathname.startsWith("/about"))
      return "bg-[url('/bg-about-light-mobile.jpg')] dark:bg-[url('/bg-about-dark-mobile.jpg')] md:bg-[url('/bg-about-light.webp')] md:dark:bg-[url('/bg-about-dark.webp')] !bg-contain bg-repeat";
    if (pathname.startsWith("/projects"))
      return "bg-[url('/bg-projects-light-mobile.jpg')] dark:bg-[url('/bg-projects-dark-mobile.jpg')] md:bg-[url('/bg-projects-light.webp')] md:dark:bg-[url('/bg-projects-dark.webp')] !bg-contain bg-repeat";
    if (pathname.startsWith("/contact"))
      return "bg-[url('/bg-contact-light-mobile.jpg')] dark:bg-[url('/bg-contact-dark-mobile.jpg')] md:bg-[url('/bg-contact-light.webp')] md:dark:bg-[url('/bg-contact-dark.webp')] !bg-contain bg-repeat";
    return "bg-[url('/bg-default.webp')]";
  })();

  return (
    <div
      className={`${backgroundClass} bg-cover bg-no-repeat max-w-[1440px] mx-auto`}
    >
      {children}
    </div>
  );
}
