import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Technologies from "./sections/Technologies";

const App = () => {
  return (
    <>
      <main className="overflow-x-hidden flex flex-col items-center">
        <Hero />
        <Technologies/>
        <Projects />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
export default App;
