import PropTypes from "prop-types";

const Tech = ({ title }) => {
  return (
    <p className="text-xl text-gray-300 capitalize whitespace-nowrap ">
      {title}
    </p>
  );
};

Tech.propTypes = { title: PropTypes.string };
export default Tech;
