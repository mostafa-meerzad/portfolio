import Project from "../components/Project";
import { projects } from "../data";

const Projects = () => {
  return (
    <section className="relative px-4">
      <h2 className="text-5xl my-12 ">projects</h2>
      <div className="lg:grid lg:grid-flow-row lg:grid-cols-2 lg:gap-12 my-12">
        {projects.map((project) => (
          <Project {...project} key={project.name} />
        ))}
      </div>
    </section>
  );
};
export default Projects;
