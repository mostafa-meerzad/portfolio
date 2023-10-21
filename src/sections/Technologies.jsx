import Tech from "../components/Tech";
import { technologies } from "../data";

const Technologies = () => {
  return (
    <section className="mt-12 container flex flex-col items-center hide-scroll gap-12  py-12 relative before-after">
      {technologies.map((tech) => (
        <div key={tech} className="w-max flex flex-col gap-12  text-center ">
          <Tech title={tech[0]} />
          <Tech title={tech[1]} />
        </div>
      ))}
    </section>
  );
};
export default Technologies;
