import PropTypes from "prop-types";

const Link = ({ href, text }) => {
  return (
    <a
      href={href}
      className="text-sm font-medium font-News relative
      after:absolute after:w-full after:h-[2px] after:bg-green-400  after:-bottom-2 after:left-0 after:rounded-lg"
    >
      {text}
    </a>
  );
};

const Project = ({ name, imgUrl, liveUrl, sourceUrl, techs }) => {
  return (
    <div className="my-12">
      <img src={imgUrl} alt={name} className="mb-4" loading="lazy" />
      <h3 className="text-2xl font-medium uppercase font-playpen">{name}</h3>
      <ul className="flex gap-4 uppercase my-1">
        {techs.map((tech) => (
          <li key={tech} className="text-gray-300 font-playpen text-sm">
            {tech}
          </li>
        ))}
      </ul>
      <div className="flex gap-4 my-4 uppercase tracking-wider ">
        <Link text={"view project"} href={liveUrl} />
        <Link text={"view code"} href={sourceUrl} />
      </div>
    </div>
  );
};

Link.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
};

Project.propTypes = {
  name: PropTypes.string,
  imgUrl: PropTypes.string,
  liveUrl: PropTypes.string,
  sourceUrl: PropTypes.string,
  techs: PropTypes.array,
};
export default Project;
