import PropTypes from "prop-types";

const Link = ({ href, text }) => {
  return (
    <a
      href={href}
      className="text-sm font-medium font-News relative
      
      after:absolute after:w-full after:h-[2px] 
      before:absolute before:w-full before:h-[2px]
      
      after:bg-gradient-to-r after:from-[#EA0406] after:to-[#8905E4]  
      before:bg-gradient-to-r from-[#8905E4] to-[#EA0406] 
      
      after:-bottom-2 after:left-0 after:rounded-lg 
      after:opacity-100

      before:-bottom-2 before:left-0 before:rounded-lg 
      before:opacity-0
      
      after:hover:opacity-0
      before:hover:opacity-100



      before:transition-all before:ease-in-out   before:duration-700
      after:transition-all after:ease-in-out   after:duration-700
      
      "
    >
      {text}
    </a>
  );
};

const Project = ({ name, imgUrl, liveUrl, sourceUrl, techs }) => {
  return (
    <div className="my-12 lg:my-4 object-contain">
      <img src={imgUrl} alt={name} className="mb-4 h-4/5" loading="lazy" />
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
