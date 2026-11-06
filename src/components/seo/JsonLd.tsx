import { FOUNDATION_INFO } from "@/data/foundationInfo";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "NGO", "NonProfitOrganization"],
        "@id": "https://kureghorfoundation.org/#organization",
        "name": FOUNDATION_INFO.name,
        "alternateName": [FOUNDATION_INFO.fullName, FOUNDATION_INFO.englishName],
        "url": "https://kureghorfoundation.org",
        "logo": {
          "@type": "ImageObject",
          "url": "https://lh3.googleusercontent.com/aida-public/AB6AXuD747y_hCBwsQtr9Fi-NKCl4bhIoGo2wnLkYAC8JICvTRQE94LjuwFka-FA4q0uvk-1qVfTklBDQ9dUS22wZZBwUi3Yv1bHLfSRsT7wStE2KetkMe6ys_SjfcdADMOy7s7N09CO4nFDXezoA0DeVDkmvIHWj0R6rMn4Q4dw0Srp2gGFjdhpJ1MCjNoMK47VWMjb9e3w8d1gExip_KBw-XsMlAmNMiIilDL4HoYRZ5E",
          "caption": "কুঁড়েঘর ফাউন্ডেশন প্রতীক",
        },
        "description": FOUNDATION_INFO.description,
        "foundingDate": "2021",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Sundarganj",
          "addressRegion": "Gaibandha",
          "postalCode": "5720",
          "addressCountry": "BD",
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+8801301189345",
            "contactType": "Customer Support",
            "areaServed": "BD",
            "availableLanguage": ["bn", "en"],
          },
          {
            "@type": "ContactPoint",
            "telephone": "+8801700806629",
            "contactType": "General Inquiries",
            "areaServed": "BD",
            "availableLanguage": ["bn", "en"],
          },
        ],
        "sameAs": [
          FOUNDATION_INFO.facebookUrl,
          FOUNDATION_INFO.whatsappUrl,
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://kureghorfoundation.org/#website",
        "url": "https://kureghorfoundation.org",
        "name": FOUNDATION_INFO.name,
        "description": FOUNDATION_INFO.tagline,
        "publisher": {
          "@id": "https://kureghorfoundation.org/#organization",
        },
        "inLanguage": "bn-BD",
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
