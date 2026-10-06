export const siteUrl = "https://talarczykdachy.pl";
export const siteName = "Paweł Talarczyk Dachy";

export const seoPages = [
  {
    path: "/polityka-prywatnosci",
    title: "Polityka prywatności | Paweł Talarczyk Dachy",
    description: "Informacje o przetwarzaniu danych z formularza kontaktowego, usługach obsługujących wiadomości i Twoich prawach. Paweł Talarczyk Dachy.",
  },
  {
    path: "/",
    title: "Usługi dekarskie Małopolska | Paweł Talarczyk Dachy",
    description: "Dekarstwo i ciesielstwo w Małopolsce. Budowa, wymiana i remonty dachów oraz prace przy kamienicach. Poznaj realizacje firmy Paweł Talarczyk Dachy.",
  },
  {
    path: "/o-nas",
    title: "O firmie – dekarstwo i ciesielstwo | Paweł Talarczyk Dachy",
    description: "Poznaj firmę Paweł Talarczyk Dachy z Podłopienia koło Tymbarku. Wykonujemy prace dekarskie i ciesielskie oraz remonty dachów na terenie Małopolski.",
  },
  {
    path: "/realizacje",
    title: "Realizacje dachów w Małopolsce | Paweł Talarczyk Dachy",
    description: "Zobacz realizacje firmy Paweł Talarczyk Dachy: pokrycia dachowe, więźby, wymiany i remonty dachów oraz prace przy kamienicach w Małopolsce.",
  },
  {
    path: "/kontakt",
    title: "Kontakt i wycena dachu | Paweł Talarczyk Dachy",
    description: "Planujesz budowę lub remont dachu w Małopolsce? Zadzwoń: 664 983 540 lub wyślij zapytanie. Paweł Talarczyk Dachy, Podłopień 64, Tymbark.",
  },
];

function escapeHtml(value: string) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

export function seoHead(pathname: string) {
  const path = pathname.replace(/\/+$/, "") || "/";
  const page = seoPages.find((entry) => entry.path === path);
  if (!page) return '<meta data-seo name="robots" content="noindex" />';
  const url = siteUrl + page.path;
  const image = `${siteUrl}/og-roof.jpg`;
  const meta = (key: string, value: string, property = false) =>
    `<meta data-seo ${property ? "property" : "name"}="${key}" content="${escapeHtml(value)}" />`;
  const business = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": `${siteUrl}/#business`,
    name: siteName,
    url: `${siteUrl}/`,
    image,
    telephone: "+48664983540",
    email: "biuro.talarczykd@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Podłopień 64",
      addressLocality: "Tymbark",
      postalCode: "34-650",
      addressCountry: "PL",
    },
    areaServed: { "@type": "AdministrativeArea", name: "Małopolska" },
    openingHoursSpecification: [{
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "17:00",
    }],
  };
  return [
    `<title data-seo>${escapeHtml(page.title)}</title>`,
    meta("description", page.description),
    `<link data-seo rel="canonical" href="${url}" />`,
    meta("og:type", "website", true),
    meta("og:locale", "pl_PL", true),
    meta("og:site_name", siteName, true),
    meta("og:title", page.title, true),
    meta("og:description", page.description, true),
    meta("og:url", url, true),
    meta("og:image", image, true),
    meta("og:image:alt", "Realizacja firmy Paweł Talarczyk Dachy", true),
    meta("twitter:card", "summary_large_image"),
    meta("twitter:title", page.title),
    meta("twitter:description", page.description),
    meta("twitter:image", image),
    `<script data-seo type="application/ld+json">${JSON.stringify(business).replaceAll("<", "\\u003c")}</script>`,
  ].join("\n");
}
