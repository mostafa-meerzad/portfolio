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
      return "bg-[url('/bg-home-light.webp')] dark:bg-[url('/bg-home-dark.webp')]";
    if (pathname.startsWith("/about"))
      return "bg-[url('/bg-about-light.webp')] dark:bg-[url('/bg-about-dark.webp')]";
    if (pathname.startsWith("/projects"))
      return "bg-[url('/bg-projects-light.webp')] dark:bg-[url('/bg-projects-dark.webp')]";
    if (pathname.startsWith("/contact"))
      return "bg-[url('/bg-contact-light.webp')] dark:bg-[url('/bg-contact-dark.webp')]";
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
