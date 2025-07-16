import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const HomeNav = () => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>
        <Link href="/">Home</Link>
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="w-[500px] h-[250px] p-4 dark:bg-[url('/bg-home-dark.png')] bg-[url('/bg-home-light.png')] bg-no-repeat bg-cover flex justify-center items-center rounded-sm relative z-10 animate-fade-in ">
          <div className=" p-4  rounded-lg shadow-md space-y-2">
            <h3 className="text-xl font-semibold ">👋 Welcome</h3>
            <p className="text-sm text-muted-foreground mb-5">
              I’m Mostafa, a self-taught full stack developer crafting clean and
              scalable web apps.
            </p>
            <Link
              href="/projects"
              className="text-sm text-blue-500/80 font-medium hover:underline"
            >
              Check out my projects →
            </Link>
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default HomeNav;
