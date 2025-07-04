import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import AboutNav from "./AboutNav";
import ContactsNav from "./ContactsNav";
import ProjectsNav from "./ProjectsNav";

const Navigation = () => {
  return (
    <NavigationMenu viewport={true}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Link href="/">Home</Link>
          </NavigationMenuTrigger>
          {/* <NavigationMenuContent> */}

          {/* </NavigationMenuContent> */}
        </NavigationMenuItem>
        {/* ------------------ About tab --------------------- */}
        <AboutNav />
        {/* ------------------ Projects tab ------------------- */}
        <ProjectsNav />
        {/* ------------------ Contact tab -------------------- */}
        <ContactsNav/>

        {/* <NavigationMenuItem>
          <NavigationMenuTrigger>Simple</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">Components</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Documentation</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Blocks</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}

        {/* <NavigationMenuItem>
          <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <CircleHelpIcon />
                    Backlog
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <CircleIcon />
                    To Do
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#" className="flex-row items-center gap-2">
                    <CircleCheckIcon />
                    Done
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;
