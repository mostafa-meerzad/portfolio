import AboutMe from "./AboutMe";
import Journey from "./Journey";
import SkillsAndTools from "./SkillsAndTools";

const AboutPage = () => {
  return (
    <div className="grid gap-16">
      <AboutMe />
      <Journey/>
      <SkillsAndTools/>
    </div>
  );
};

export default AboutPage;
