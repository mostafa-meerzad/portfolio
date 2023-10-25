import Tech from "../components/Tech";
import { technologies } from "../data";

const Technologies = () => {
  return (
    <section className=" container flex flex-col items-center gap-12 my-8  relative hide-scroll 
  
    ">
      
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
