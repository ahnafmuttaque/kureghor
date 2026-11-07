import { FOUNDATION_INFO } from "@/data/foundationInfo";
import { SITE_URL } from "@/utils/siteConfig";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "NGO", "NonProfitOrganization"],
        "@id": `${SITE_URL}/#organization`,
        name: FOUNDATION_INFO.name,
        alternateName: [FOUNDATION_INFO.fullName, FOUNDATION_INFO.englishName],
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/kureghor-logo.png`,
          caption: "কুঁড়েঘর ফাউন্ডেশন প্রতীক",
        },
        description: FOUNDATION_INFO.description,
        foundingDate: "2021",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Sundarganj",
          addressRegion: "Gaibandha",
          postalCode: "5720",
          addressCountry: "BD",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+8801301189345",
            contactType: "Customer Support",
            areaServed: "BD",
            availableLanguage: ["bn", "en"],
          },
          {
            "@type": "ContactPoint",
            telephone: "+8801700806629",
            contactType: "General Inquiries",
            areaServed: "BD",
            availableLanguage: ["bn", "en"],
          },
        ],
        sameAs: [FOUNDATION_INFO.facebookUrl, FOUNDATION_INFO.whatsappUrl],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: FOUNDATION_INFO.name,
        description: FOUNDATION_INFO.tagline,
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        inLanguage: "bn-BD",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
