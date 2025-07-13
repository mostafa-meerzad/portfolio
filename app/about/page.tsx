import AboutMe from "./AboutMe";
import Certificates from "./Certificates";
import FunFacts from "./FunFacts";
import Journey from "./Journey";
import SkillsAndTools from "./SkillsAndTools";

const AboutPage = () => {
  return (
    <div className="grid gap-16">
      <AboutMe />
      <Journey />
      <SkillsAndTools />
      <Certificates />
      <FunFacts/>
    </div>
  );
};

export default AboutPage;
