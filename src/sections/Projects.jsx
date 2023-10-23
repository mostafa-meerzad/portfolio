import Project from "../components/Project";
import Rings from "../components/Rings";
import { projects } from "../data";

const Projects = () => {
  return (
    <section className="container mt-24 relative">
      <Rings
        className={"absolute -top-[5%] -right-[45%] scale-105 opacity-70 -z-10"}
      />
      <h2 className="text-5xl my-12">projects</h2>
      {projects.map((project) => (
        <Project {...project} key={project.name} />
      ))}
    </section>
  );
};
export default Projects;
