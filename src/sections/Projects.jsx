import Project from "../components/Project";
import { projects } from "../data";

const Projects = () => {
  return (
    <section className="container my-24">
      <h2 className="text-5xl my-12">projects</h2>
      {projects.map((project) => (
        <Project {...project} key={project.name} />
      ))}
    </section>
  );
};
export default Projects;
