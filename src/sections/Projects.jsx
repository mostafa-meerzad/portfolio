import Project from "../components/Project";
import Rings from "../components/Rings";
import { projects } from "../data";

const Projects = () => {
  return (
    <section className="relative wrapper">
      <Rings
        className={"absolute -top-[5%] -right-[45%] scale-105 opacity-70 -z-10"}
      />
      <h2 className="text-5xl my-12">projects</h2>
      <div className="lg:grid lg:grid-flow-row lg:grid-cols-2 lg:gap-8 my-12">
        {projects.map((project) => (
          <Project {...project} key={project.name} />
        ))}
      </div>
    </section>
  );
};
export default Projects;
