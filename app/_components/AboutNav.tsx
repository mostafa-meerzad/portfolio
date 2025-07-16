import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import Image from "next/image";
import Link from "next/link";
import { about } from "../constants/constants";
import ListItem from "./ListItem";
import me from "../assets/me-colored.png";

const AboutNav = () => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>
        <Link href={"/about"}>About</Link>
      </NavigationMenuTrigger>
      <NavigationMenuContent >
        <ul className="grid gap-3 md:w-[280px] lg:w-[500px] lg:grid-cols-[.70fr_.9fr] lg:items-center animate-fade-in dark:bg-[url('/bg-contact-dark.png')] bg-[url('/bg-contact-light.png')] bg-no-repeat bg-cover rounded-sm">
          <li className="row-span-3">
            <NavigationMenuLink asChild>
              <div className="from-muted/50 to-muted flex h-full w-full flex-col justify-center items-center rounded-md bg-linear-to-b p-4 no-underline outline-hidden select-none focus:shadow-md">
                <Image
                  src={me}
                  width={200}
                  height={200}
                  alt="Mostafa"
                  className="mt-2 mb-2 text-lg font-medium w-36 h-36 object-cover rounded-full shadow-2xl outline outline-sidebar-accent "
                ></Image>
                <p className="flex flex-col gap-1 text-muted-foreground text-sm leading-tight text-center">
                  <span className="font-semibold text-[1rem]">
                    Mostafa Meerzad
                  </span>
                  <span>Self taught full stack developer</span>
                </p>
              </div>
            </NavigationMenuLink>
          </li>

          <div className="flex flex-col gap-4 mt-7">
            {about.map(({ title, description }, i) => {
              return (
                <ListItem title={title} key={i}>
                  {description}
                </ListItem>
              );
            })}
          </div>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default AboutNav;
