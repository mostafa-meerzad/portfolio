import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-[auto_auto] gap-y-16 py-10 md:grid-cols-7 md:items-end lg:items-center">
      {/* ------------------ title section --------------------- */}
      <div className="col-start-1 col-end-2 row-start-1 md:col-start-1 md:col-end-6 flex flex-col items-center md:items-start gap-2 md:gap-1 lg:gap-6 z-10">
        <p className="flex justify-start items-baseline gap-1 font-bold text-[2.5rem] md:text-[2.8rem] lg:text-5xl">
          Hello <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
        </p>
        <div
          className="flex justify-start items-baseline gap-1 relative
        "
        >
          <div className="inline-block w-32 h-[2px] bg-blue-500 absolute right-[15%] md:right-[93%] bottom-0 md:bottom-2 " />
          <p className="font-medium text-[2.1rem] pl-10 md:text-[2.1rem] lg:text-4xl md:pl-5 ">
            I&apos;m <span className="font-semibold">Mostafa</span>
          </p>
        </div>
        <p className="text-[2.4rem] md:text-[2.8rem] lg:text-5xl font-bold">
          Full Stack Developer
        </p>

        <div className="flex justify-start gap-10 mt-5 md:mt-12">
          <Button>Got a project?</Button>
          <Button>My resume</Button>
        </div>
      </div>

      {/* ------------------ image section --------------------- */}
      <div className="col-start-1 col-end-2 row-start-2 md:row-start-1 md:col-start-4 md:col-end-8 lg:place-self-end lg:mx-0 border mx-auto rounded-full size-[400px] md:size-[380px] lg:size-[500px]  bg-[url('/avatar-bg-pattern.png')] bg-contain"></div>
    </div>
  );
};

export default Hero;
