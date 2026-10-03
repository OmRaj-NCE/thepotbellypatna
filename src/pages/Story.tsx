import SEO from "../components/seo/SEO";
import StoryHero from "../components/sections/story/StoryHero";
import BiharOnAPlate from "../components/sections/story/BiharOnAPlate";
import CulinaryVocabulary from "../components/sections/story/CulinaryVocabulary";
import StoryEditorial from "../components/sections/story/StoryEditorial";
import TraditionalInfluences from "../components/sections/story/TraditionalInfluences";
import ContemporaryTable from "../components/sections/story/ContemporaryTable";
import DiningPhilosophy from "../components/sections/story/DiningPhilosophy";
import StoryClosing from "../components/sections/story/StoryClosing";

export default function Story() {
  return (
    <>
      <SEO
        title="The Story — The Potbelly, Patna"
        description="Bihar on a plate. The culinary vocabulary, traditional influences and dining philosophy behind The Potbelly — sattu, chokha, mustard, earthen pots and open flame."
        path="/story"
      />

      <StoryHero />
      <BiharOnAPlate />
      <CulinaryVocabulary />
      <StoryEditorial />
      <TraditionalInfluences />
      <ContemporaryTable />
      <DiningPhilosophy />
      <StoryClosing />
    </>
  );
}