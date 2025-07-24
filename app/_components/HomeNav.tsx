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
        <div className="w-[450px] h-[160px] dark:bg-[url('/bg-home-dark.png')] bg-[url('/bg-home-light.png')] bg-no-repeat bg-cover flex justify-center items-center rounded-sm relative z-10 animate-fade-in ">
          <div
            className=" px-4  pb-5
           rounded-lg shadow-md"
          >
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2" >
              👋 Hi there!
            </h3>
            <p className="text-sm text-muted-foreground mb-5">
              I’m{" "}
              <span className="font-medium text-white">Mostafa Meerzad</span>, a
              full-stack developer focused on building fast, scalable, and
              elegant web apps.
            </p>
            <Link
              href="/projects"
              className="text-sm text-blue-500/80 font-medium hover:underline"
            >
              🚀 View my projects →
            </Link>
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default HomeNav;
