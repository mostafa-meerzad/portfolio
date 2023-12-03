import Project from "../components/Project";
import { projects } from "../data";

const Projects = () => {
  return (
    <section className="relative px-4 md:px-12 lg:px-24 bg-pattern bg-no-repeat bg-cover bg-left">
      <h2 className="text-4xl my-12 font-Posterama">projects</h2>
      <div className="lg:grid lg:grid-flow-row lg:grid-cols-2 lg:gap-12 my-12 ">
        {projects.map((project) => (
          <Project {...project} key={project.name} />
        ))}
      </div>
    </section>
  );
};
export default Projects;
