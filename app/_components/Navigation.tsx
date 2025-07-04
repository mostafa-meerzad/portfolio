import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import AboutNav from "./AboutNav";
import ContactsNav from "./ContactsNav";
import ProjectsNav from "./ProjectsNav";
import HomeNav from "./HomeNav";

const Navigation = () => {
  return (
    <NavigationMenu viewport={true}>
      <NavigationMenuList>
        <HomeNav />
        <AboutNav />
        <ProjectsNav />
        <ContactsNav />
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;
