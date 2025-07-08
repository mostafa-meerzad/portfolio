import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-[auto_auto] md:grid-cols-7 gap-y-16  px-8 py-10 md:items-end lg:items-center">
      {/* ------------------ title section --------------------- */}
      <div className="col-start-1 col-end-2 row-start-1 md:col-start-1 md:col-end-6     flex flex-col items-center md:items-start gap-4 z-10">
        <p className="flex justify-start items-baseline gap-1 font-bold text-5xl md:text-4xl">
          Hello <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
        </p>
        <div
          className="flex justify-start items-baseline gap-1 relative
        "
        >
          <div className="inline-block w-32 h-[2px] bg-blue-500 absolute right-[15%] md:right-[93%] bottom-0 md:bottom-2 " />
          <p className="font-medium text-4xl pl-10 md:text-3xl md:pl-5">I&apos;m <span className="font-semibold">Mostafa</span></p>
        </div>
        <p className="text-[2.9rem] md:text-[3rem] font-bold">Full Stack Developer</p>

        <div className="flex justify-start gap-10 mt-5 md:mt-12">
          <Button>Got a project?</Button>
          <Button>My resume</Button>
        </div>
      </div>

      {/* ------------------ image section --------------------- */}
      <div className="col-start-1 col-end-2  row-start-2 md:row-start-1 md:col-start-4 md:col-end-8 lg:place-self-end mx-auto lg:mx-0 border rounded-full size-[420px] md:size-[380px] lg:size-[500px]  bg-[url('/avatar-bg-pattern.png')] bg-contain"></div>
    </div>
  );
};

export default Hero;
