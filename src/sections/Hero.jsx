import mainImg from "../assets/images/main.png";
import Circle from "../components/Circle";
import Rings from "../components/Rings";

const Hero = () => {
  return (
    <section className="flex flex-col items-center overflow-x-hidden container relative">
      <img className=" max-sm:w-2/3" src={mainImg} alt="Mostafa-image" />
      <Rings className={"absolute -left-[17rem] top-4 opacity-70"} />

      <div className="mt-8">
        <h1 className="font-News text-[2.5rem] leading-10  text-center">
          <span>Nice to meet you!</span>
          <br />
          <span className="">
            I&apos;m <span>Mostafa Meerzad</span>
          </span>
        </h1>

        <p className="text-center mt-4 desc max-w-sm">
          I&apos;m a front-end developer passionate about building accessible
          web apps that users love.
        </p>
      </div>
        <Circle
          className={"scale-75 z-10 absolute top-1/3 -right-12 opacity-50"}
        />
    </section>
  );
};
export default Hero;
