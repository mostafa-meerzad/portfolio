import Tech from "../components/Tech";
import { technologies } from "../data";

const Technologies = () => {
  return (
    <section
      className="grid justify-items-center gap-10
      md:grid-rows-2 md:grid-flow-col   md:overflow-x-scroll md:justify-items-start md:mb-14 hide-scroll 
      w-full wrapper
       "
    >
      {technologies.map((tech) => (
        <div key={tech} className="w-max flex flex-col gap-12  text-center ">
          <Tech title={tech} />
        </div>
      ))}
    </section>
  );
};
export default Technologies;
