import { IconType } from "react-icons";
import { FaGamepad, FaMotorcycle } from "react-icons/fa";
import { GiTinker } from "react-icons/gi";
import { HiMiniPaintBrush } from "react-icons/hi2";

type FunFact = { Icon: IconType; title: string; desc: string; };
const funFacts: FunFact[] = [
  {
    Icon: FaGamepad,
    title: "A Gamer",
    desc: "Love games like GTA and Call of Duty",
  },
  {
    Icon: GiTinker,
    title: "Tinker Mindset",
    desc: "Repurpose junk into useful tools",
  },
  {
    Icon: FaMotorcycle,
    title: "Bike Enthusiast",
    desc: "Enjoy working on and tuning my bike",
  },
  {
    Icon: HiMiniPaintBrush,
    title: "Creative Roots",
    desc: "Grew up with a designer brother and painter sister",
  },
];

export {funFacts};