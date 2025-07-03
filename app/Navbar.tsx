import ModeToggle from "./_components/ModeToggle";
import Name from "./_components/Name";
import Navigation from "./_components/Navigation";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-5 px-7">
      <Name />
      <div className="flex gap-3">
        <Navigation /> <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
