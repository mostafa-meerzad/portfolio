import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";

const ListItem = ({
  title,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"li">) => {
  return (
    <li {...props}>
      <NavigationMenuLink >
          <div className="text-sm capitalize leading-none font-medium mb-2">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
      </NavigationMenuLink>
    </li>
  );
};

export default ListItem;
