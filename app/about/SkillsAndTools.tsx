import { Badge } from "@/components/ui/badge";
import { SkillAndTool, skillsAndTools } from "../constants/constants";

const SkillsAndTools = () => {
  return (
    <div className="flex flex-col items-center gap-8 ">
      <h2 className="h2">Skills & Tools</h2>
      <ul className="flex justify-around items-start  flex-col md:flex-row gap-5 p-5 border rounded-xl w-full background ">
        {skillsAndTools.map((item) => (
          <SkillSet {...item} key={item.title} />
        ))}
      </ul>
    </div>
  );
};

const SkillSet = ({ title, skillSet }: SkillAndTool) => {
  return (
    <li>
      <h3 className="text-xl font-semibold mb-3 capitalize">{title}</h3>
      <ul className="flex md:flex-col lg:flex-row lg:w-32 xl:w-52 gap-2 lg:gap-3 flex-wrap ">
        {skillSet.map(({ name, Img }) => (
          <li key={name} className="cursor-default">
            <Badge className="bg-[#122234] text-gray-100 dark:bg-zinc-800">
              {name} <Img />
            </Badge>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default SkillsAndTools;
