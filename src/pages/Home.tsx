import Hero from "../components/sections/Hero";
import Introduction from "../components/sections/Introduction";
import SignatureDishes from "../components/sections/SignatureDishes";
import FoodEditorial from "../components/sections/FoodEditorial";
import TheSetting from "../components/sections/TheSetting";
import MenuPreview from "../components/sections/MenuPreview";
import ExperienceTeaser from "../components/sections/ExperienceTeaser";
import ReservationCTA from "../components/sections/ReservationCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <SignatureDishes />
      <FoodEditorial />
      <TheSetting />
      <MenuPreview />
      <ExperienceTeaser />
      <ReservationCTA />
    </>
  );
}