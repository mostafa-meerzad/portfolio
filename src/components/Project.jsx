import PropTypes from "prop-types";

const Link = ({ href, text }) => {
  return (
    <a
      href={href}
      className="text-sm font-medium  relative"
    >
      {text}
    </a>
  );
};

const Project = ({ name, imgUrl, liveUrl, sourceUrl, techs }) => {
  return (
    <div className="my-12 lg:my-4 ">
      <div className="relative  h-4/5 w-full mb-2">
        <img
          src={imgUrl}
          alt={name}
          className="w-full h-full  object-cover rounded-lg"
          loading="lazy"
        />
      </div>
      <h3 className="text-xl font-medium uppercase font-playpen">{name}</h3>
      <ul className="flex gap-4 uppercase my-1">
        {techs.map((tech) => (
          <li key={tech} className="text-gray-300 font-playpen text-sm">
            {tech}
          </li>
        ))}
      </ul>
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
