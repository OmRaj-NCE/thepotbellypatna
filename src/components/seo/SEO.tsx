import { Helmet } from "react-helmet-async";

import { SITE_URL, DEFAULT_OG_IMAGE } from "../../data/seo";

/* ------------------------------------------------------------
   Per-page SEO component.
   Renders the document title, description, canonical link,
   Open Graph tags and Twitter Card tags.

   The caller passes the FULL title. Nothing is appended.
   ------------------------------------------------------------ */

type Props = {
  /** Full page title. Include the brand when appropriate. */
  title: string;
  /** Meta description, roughly 120–160 characters. */
  description: string;
  /** Route path, beginning with a slash. e.g. "/menu". */
  path: string;
  /** Absolute or root-relative image URL for OG / Twitter. */
  image?: string;
  /** Set true on the 404 page to exclude from search engines. */
  noindex?: boolean;
};

export default function SEO({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  noindex = false,
}: Props) {
  const url = `${SITE_URL}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return (
    <Helmet htmlAttributes={{ lang: "en" }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="The Potbelly — Patna" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content="The Potbelly — Patna" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}