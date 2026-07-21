import { SITE } from "@/lib/constants";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  alternateName: SITE.alternateName,
  url: SITE.url,
  email: SITE.email,
  telephone: SITE.phone,
  description: SITE.description,
  areaServed: {
    "@type": "Country",
    name: "Venezuela",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Caracas",
    addressCountry: "VE",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: SITE.phone,
    email: SITE.email,
    contactType: "customer service",
    availableLanguage: ["English", "Spanish"],
  },
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
