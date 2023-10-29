import mainImg from "../assets/images/main.png";

const Hero = () => {
  return (
    <section className="flex flex-col items-center py-12 bg-shadow lg:bg-shadow-desktop" >
      <div className=" w-[20rem] h-[20rem] lg:w-[23rem] lg:h-[23rem] rounded-full overflow-hidden  shadow-md shadow-white  ">
        <img className=" relative -top-2" src={mainImg} alt="An image of Mostafa Meerzad" />
      </div>

      <div className="flex flex-col  mt-10 items-center">
        <h1 className="text-4xl font-Posterama ">
          <span>Mostafa Meerzad</span>
        </h1>
        <p className="mt-2 text-lg font-Nexa desc">
          A passionate front-end web developer
        </p>
      </div>
    </section>
  );
};
export default Hero;
