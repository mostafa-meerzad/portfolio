import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { contacts } from "../constants/constants";
import ContactLink from "./ContactLink";

const ContactsNav = () => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>
        <Link href={"/contact"}>Contact</Link>
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[250px] gap-1 animate-fade-in">
          {contacts.map((prop) => {
            return <ContactLink {...prop} key={prop.label} />;
          })}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default ContactsNav;
