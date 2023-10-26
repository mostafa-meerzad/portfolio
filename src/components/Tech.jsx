import PropTypes from "prop-types";
const Tech = ({ title }) => {
  return <span className="text-4xl md:text-3xl">{title}</span>;
};

Tech.propTypes = {title: PropTypes.string}
export default Tech;
