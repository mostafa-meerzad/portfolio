import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Technologies from "./sections/Technologies";

const App = () => {
  return (
    <>
      <main className="overflow-x-hidden flex flex-col items-center ">
        <Hero />
        <hr className="w-[95%] h-[2px] bg-gray-400 mt-20 mb-12   " />
        <Technologies />
        <hr className="w-[95%] h-[2px] bg-gray-400 my-12 md:hidden" />
        <Projects />
      </main>
      <footer >
        <Footer />
      </footer>
    </>
  );
};
export default App;
