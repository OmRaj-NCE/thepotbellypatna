import SEO from "../components/seo/SEO";
import ExperienceHero from "../components/sections/experience/ExperienceHero";
import TheSetting from "../components/sections/experience/TheSetting";
import TheSequence from "../components/sections/experience/TheSequence";
import TheFlavours from "../components/sections/experience/TheFlavours";
import TheAtmosphere from "../components/sections/experience/TheAtmosphere";
import TheOccasion from "../components/sections/experience/TheOccasion";
import ExperienceClosing from "../components/sections/experience/ExperienceClosing";

export default function Experience() {
  return (
    <>
      <SEO
        title="The Experience — The Potbelly, Patna"
        description="An evening paced for the table. The dining experience at The Potbelly inside the Bihar Museum — the setting, the sequence, the flavours, the atmosphere."
        path="/experience"
      />

      <ExperienceHero />
      <TheSetting />
      <TheSequence />
      <TheFlavours />
      <TheAtmosphere />
      <TheOccasion />
      <ExperienceClosing />
    </>
  );
}