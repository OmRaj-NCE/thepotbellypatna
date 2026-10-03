import SEO from "../components/seo/SEO";
import PagePlaceholder from "../components/ui/PagePlaceholder";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Not found — The Potbelly, Patna"
        description="The page you were looking for doesn't exist."
        path="/404"
        noindex
      />

      <PagePlaceholder
        index="404"
        title="Not on the Menu"
        intro="The page you were looking for doesn't exist — but the kitchen is still open."
        note="Return to the homepage or explore the menu using the links above."
      />
    </>
  );
}