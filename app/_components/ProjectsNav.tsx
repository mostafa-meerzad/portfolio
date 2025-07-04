import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { projects } from "../constants/constants";
import ListItem from "./ListItem";

const ProjectsNav = () => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[350px] gap-3 p-3 md:grid-cols-1 lg:w-[500px] lg:grid-cols-2 ">
          {projects.map((component) => (
            <ListItem key={component.title} title={component.title}>
              {component.description}
            </ListItem>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default ProjectsNav;
