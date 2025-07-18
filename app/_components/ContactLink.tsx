import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import Link from "next/link";
import { ContactsType } from "../constants/constants";


const ContactLink = ({icon, label, value, href}: ContactsType) => {
  return (
    <NavigationMenuLink asChild>
      <Link href={href} target="_blank" rel="noopener noreferrer" >
        <div className="flex  gap-2 justify-start items-center font-medium">{icon} {label}</div>
        <div className="text-muted-foreground">
          {value}
        </div>
      </Link>
    </NavigationMenuLink>
  );
};

export default ContactLink;
