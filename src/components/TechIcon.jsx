const TechIcon = ({ img, name }) => {
  return (
    <div className="w-10 h-10w-10  flex justify-center items-center" title={name}>
      <img src={img} alt={name} />
    </div>
  );
};
export default TechIcon;
