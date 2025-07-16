"use client";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu } from "lucide-react";
import Image from "next/image";

import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger
} from "@/components/ui/drawer";
import me from "../assets/me.png";
import ModeToggle from "./ModeToggle";
import NavItem from "./NavItem";

const MobileDrawer = () => {
  return (
    <Drawer direction="left">
      <DrawerTrigger className="md:hidden p-2">
        <Menu className="h-6 w-6" />
      </DrawerTrigger>

      <DrawerContent className="p-4 space-y-6 bg-background text-foreground ">
        <VisuallyHidden>
          <DrawerTitle>Mobile navigation menu</DrawerTitle>
        </VisuallyHidden>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4 mt-2">
            <Image
              src={me}
              alt="Mostafa"
              width={100}
              height={100}
              className="rounded-full border shadow-sm object-cover w-14 h-14"
            />
            <div>
              <div className="font-semibold text-base">Mostafa Meerzad</div>
              <div className="text-sm text-muted-foreground">
                Software Engineer
              </div>
            </div>
          </div>
          <ModeToggle />
        </div>
        {/* Navigation Items */}
        <nav className="space-y-2 mt-5 ml-2">
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
      </DrawerContent>
    </Drawer>
  );
};



export default MobileDrawer;
