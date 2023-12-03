import { backendTechIcons, frontendTechIcons } from "../data";
import TechIcon from "../components/TechIcon";

const AboutMe = () => {
  return (
    <div className="px-4 md:px-12 lg:px-24 ">
      <h2 className="text-5xl mb-10 font-Posterama cap">About Me</h2>
      <p className="text-gray-300 text-lg">
        Hello! I'm Mostafa, a self-taught web developer with a unique journey in
        the technology field. Originally a computer science student, my academic
        path took an unexpected turn due to political events, leading me to
        leave college after two years. However, my passion for technology and
        learning persisted.
      </p>
      <h3 className="text-3xl font-Posterama text-gray-300 my-4">frontend</h3>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <p className="max-w-4xl">
          Embracing the challenge, I delved into web development and embarked on
          a self-taught journey. Over the course of two years, I acquired
          proficiency in a variety of technologies including:
        </p>
        <div className="p-8 flex justify-center gap-8">
          {frontendTechIcons.map(({ name, img }) => (
            <TechIcon name={name} img={img} key={name} />
          ))}
        </div>
      </div>
      <h3 className="text-3xl font-Posterama text-gray-300 my-4">backend</h3>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <p className="max-w-4xl">
          Motivated to broaden my skills, I dedicated time to exploring backend
          technologies. In the last couple of months, I delved into:
        </p>
        <div className="p-8 flex justify-center items-center gap-8">
          {backendTechIcons.map(({ name, img }) => (
            <TechIcon name={name} img={img} key={name} />
          ))}
        </div>
      </div>
      <br />
      <p className="text-gray-300">
        While I've made strides in backend development, I acknowledge the
        ongoing learning process and continue to build confidence in this field.
      </p>
    </div>
  );
};

export default AboutMe;
