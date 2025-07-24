import { IconType } from "react-icons";
import { FaMedal } from "react-icons/fa";
import { PiPlusBold } from "react-icons/pi";

type AdvantagesType = { value: string; label: string; Icon: IconType };
const advantages: AdvantagesType[] = [
  {
    value: "3",
    label: "years of practical experience",
    Icon: PiPlusBold,
  },
  {
    value: "150",
    label: "projects built during learning",
    Icon: PiPlusBold,
  },
  {
    value: "Top 10",
    label: "GitHub contributor in Afghanistan",
    Icon: FaMedal,
  },
];

export { advantages };
