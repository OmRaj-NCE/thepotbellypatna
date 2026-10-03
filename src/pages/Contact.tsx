import SEO from "../components/seo/SEO";
import ContactHero from "../components/sections/contact/ContactHero";
import ContactDetails from "../components/sections/contact/ContactDetails";
import ContactLocation from "../components/sections/contact/ContactLocation";
import ReservationCTA from "../components/sections/ReservationCTA";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact — The Potbelly, Patna"
        description="Find The Potbelly at 3, Bailey Rd, inside the Bihar Museum, Officers Flat, Market, Patna, Bihar 800001. Call 070919 10283."
        path="/contact"
      />

      <ContactHero />
      <ContactDetails />
      <ContactLocation />
      <ReservationCTA />
    </>
  );
}