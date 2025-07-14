import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { projects } from "../constants/constants";
import ListItem from "./ListItem";
import Link from "next/link";

const ProjectsNav = () => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>
        <Link href={"/projects"}>Projects</Link>
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[350px] gap-4 p-3 md:grid-cols-1 lg:w-[500px] lg:grid-cols-2 animate-fade-in">
          {projects.slice(0, 4).map(({ name, description }) => (
            <ListItem key={name} title={name}>
              {description}
            </ListItem>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default ProjectsNav;
