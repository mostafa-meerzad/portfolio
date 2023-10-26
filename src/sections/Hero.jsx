import mainImg from "../assets/images/main.png";
import Circle from "../components/Circle";
import Rings from "../components/Rings";

const Hero = () => {
  return (
    <section className="flex flex-col items-center  w-full relative md:flex-row max-lg:pr-0  wrapper ">
      <img
        className=" max-sm:w-2/3 sm:w-1/2 md:order-2 max-md:m-auto max-lg:ml-auto"
        src={mainImg}
        alt="Mostafa-image"
      />
      <Rings
        className={"absolute -left-[70%] top-4 opacity-70 md:-left-[10%] -z-10"}
      />

      <div className="mt-8 md:w-[60%] max-md:relative max-lg:absolute">
        <h1 className="font-News text-[2.5rem] leading-10  text-center md:text-start md:text-[3.5rem] md:leading-[3.8rem] md:mb-8">
          <span>Nice to meet you!</span>
          <br />
          <span>
            I&apos;m <span>Mostafa Meerzad</span>
          </span>
        </h1>

        <p className="text-center mt-4 desc max-w-sm md:text-start md:text-lg">
          I&apos;m a front-end developer passionate about building accessible
          web apps that users love.
        </p>
      </div>
      <Circle
        className={
          "scale-75 z-10 absolute top-1/3 -right-12 opacity-50 md:right-[40%] md:top-[70%]"
        }
      />
    </section>
  );
};
export default Hero;
