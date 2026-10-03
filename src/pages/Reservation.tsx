import SEO from "../components/seo/SEO";
import ReservationHero from "../components/sections/reservation/ReservationHero";
import ReservationForm from "../components/sections/reservation/ReservationForm";
import ReservationInfo from "../components/sections/reservation/ReservationInfo";

export default function Reservation() {
  return (
    <>
      <SEO
        title="Reserve a Table — The Potbelly, Patna"
        description="Reserve a table at The Potbelly, Patna. Tell us your date, time and party size — or call 070919 10283 for same-day bookings."
        path="/reservation"
      />

      <ReservationHero />
      <ReservationForm />
      <ReservationInfo />
    </>
  );
}