import MobileDrawer from "./_components/MobileDrawer";
import ModeToggle from "./_components/ModeToggle";
import Name from "./_components/Name";
import Navigation from "./_components/Navigation";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center  p-5 px-7">
      <Name />
      <div className="md:flex gap-3 items-center hidden">
        <Navigation /> <ModeToggle />
      </div>
      <MobileDrawer />
    </nav>
  );
};

export default Navbar;
