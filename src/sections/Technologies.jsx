import Tech from "../components/Tech";
import { technologies } from "../data";

const Technologies = () => {
  return (
    <section
      className="grid gap-x-12 gap-y-4 grid-rows-3 grid-flow-col w-full overflow-x-auto hide-scroll px-8 my-12
      md:px-12
       "
    >
      {technologies.map((tech) => (
        <Tech title={tech} key={tech} />
      ))}
    </section>
  );
};
export default Technologies;
