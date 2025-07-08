import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="flex justify-between items-center px-20 py-10">
      {/* ------------------ title section --------------------- */}
      <div className="flex flex-col gap-4">
        <p className="flex justify-start items-baseline gap-1 font-bold text-5xl ">
          Hello <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
        </p>
        <div
          className="flex justify-start items-baseline gap-1 relative
        "
        >
          <div className="inline-block w-32 h-[2px] bg-blue-500 absolute right-[93%] bottom-2 " />
          <p className="font-medium text-4xl pl-10">I&apos;m Mostafa</p>
        </div>
        <p className=" text-[3.5rem] font-bold">Full Stack Developer</p>

        <div className="flex justify-start gap-10 mt-12">
          <Button>Got a project?</Button>
          <Button>My resume</Button>
        </div>
      </div>

      {/* ------------------ image section --------------------- */}
      <div className="border rounded-full w-[500px] h-[500px] bg-[url('/avatar-bg-pattern.png')] bg-contain"></div>
    </div>
  );
};

export default Hero;
