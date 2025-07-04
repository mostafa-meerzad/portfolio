"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
  DrawerTitle,
} from "@/components/ui/drawer";
import ModeToggle from "./ModeToggle";

const MobileDrawer = () => {
  return (
    <Drawer direction="left">
      <DrawerTrigger className="md:hidden p-2">
        <Menu className="h-6 w-6" />
      </DrawerTrigger>

      <DrawerContent className="p-4 space-y-6 bg-background text-foreground " >
        <VisuallyHidden>
          <DrawerTitle>Mobile navigation menu</DrawerTitle>
        </VisuallyHidden>
        {/* Close button */}
        <DrawerClose className="absolute top-4 right-4">
          <X className="w-5 h-5" />
        </DrawerClose>
        {/* Mini Profile */}
        <div className="flex items-center gap-4 mt-2">
          <Image
            src="/me.png"
            alt="Mostafa"
            width={20}
            height={20}
            className="rounded-full border shadow-sm object-cover w-14 h-14"
          />
          <div>
            <div className="font-semibold text-base">Mostafa Meerzad</div>
            <div className="text-sm text-muted-foreground">
              Software Engineer
            </div>
          </div>
        </div>
        {/* Navigation Items */}
        <nav className="space-y-4 mt-5 ml-2">
          <NavItem
            href="/"
            title="Home"
            description="Welcome to my portfolio"
          />
          <NavItem
            href="/about"
            title="About"
            description="Get to know me better"
          />
          <NavItem
            href="/projects"
            title="Projects"
            description="See what I’ve built"
          />
          <NavItem
            href="/contact"
            title="Contact"
            description="Let’s work together"
          />
        </nav>

        <div className="pt-8 flex items-center justify-center gap-3">
          <div className="text-xs text-muted-foreground mb-1">Appearance</div>
          <ModeToggle/>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

function NavItem({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Link href={href} className="block">
      <div className="text-lg font-medium">{title}</div>
      <div className="text-sm text-muted-foreground">{description}</div>
    </Link>
  );
}

export default MobileDrawer;
