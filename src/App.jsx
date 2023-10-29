import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Technologies from "./sections/Technologies";

const App = () => {
  return (
    <>
      <main className=" flex flex-col items-center max-w-screen-2xl mx-auto">
        <Hero />
        <hr className="w-[95%] h-[.5px] bg-gray-400 opacity-50 mt-20    " />
        <Technologies />
        {/* <hr className="w-[95%] h-[1px] bg-gray-400 opacity-50 my-12 md:hidden" /> */}
        <Projects />
      </main>
      <footer className="flex flex-col items-center max-w-screen-2xl m-auto mt-12">
        <hr className="w-[95%] h-[.5px] bg-gray-400 opacity-50 " />
        <Footer />
      </footer>
    </>
  );
};
export default App;
