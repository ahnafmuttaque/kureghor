import type { Metadata } from "next";
import { Hind_Siliguri, Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { FOUNDATION_INFO } from "@/data/foundationInfo";

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hind-siliguri",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kureghorfoundation.org"),
  title: {
    default: "কুঁড়েঘর ফাউন্ডেশন | তারুণ্যের শক্তিতে সম্ভাবনার বিকাশ",
    template: "%s | কুঁড়েঘর ফাউন্ডেশন",
  },
  description:
    "কুঁড়েঘর ফাউন্ডেশন (কুঁড়েঘর অ্যাসোসিয়েশন) পাবলিক বিশ্ববিদ্যালয়ের শিক্ষার্থীদের পরিচালিত সম্পূর্ণ অরাজনৈতিক ও অলাভজনক মানবিক সংগঠন। শিক্ষা, বিনামূল্যে চিকিৎসা, পরিবেশ ও জরুরি দুর্যোগ সহায়তায় নিবেদিত।",
  keywords: [
    "কুঁড়েঘর ফাউন্ডেশন",
    "কুঁড়েঘর অ্যাসোসিয়েশন",
    "Kureghor Foundation",
    "Kureghor Association",
    "স্বেচ্ছাসেবী সংগঠন গাইবান্ধা",
    "সুন্দরগঞ্জ মানবিক সংগঠন",
    "শিক্ষার্থী রক্তদান নেটওয়ার্ক",
    "গণিত অলিম্পিয়াড",
    "ঈদ সামগ্রী বিতরণ",
    "ফ্রি মেডিকেল ক্যাম্প",
  ],
  authors: [{ name: "কুঁড়েঘর অ্যাসোসিয়েশন" }],
  creator: "কুঁড়েঘর অ্যাসোসিয়েশন",
  publisher: "কুঁড়েঘর ফাউন্ডেশন",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "কুঁড়েঘর ফাউন্ডেশন — তারুণ্যের শক্তিতে সম্ভাবনার বিকাশ",
    description:
      "পাবলিক বিশ্ববিদ্যালয়ের শিক্ষার্থীদের পরিচালিত ১০০% অরাজনৈতিক ও অলাভজনক স্বেচ্ছাসেবী মানবিক উদ্যোগ। শিক্ষা, স্বাস্থ্যসেবা ও পরিবেশ উন্নয়নে নিবেদিত।",
    url: "https://kureghorfoundation.org",
    siteName: "কুঁড়েঘর ফাউন্ডেশন",
    locale: "bn_BD",
    type: "website",
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuD747y_hCBwsQtr9Fi-NKCl4bhIoGo2wnLkYAC8JICvTRQE94LjuwFka-FA4q0uvk-1qVfTklBDQ9dUS22wZZBwUi3Yv1bHLfSRsT7wStE2KetkMe6ys_SjfcdADMOy7s7N09CO4nFDXezoA0DeVDkmvIHWj0R6rMn4Q4dw0Srp2gGFjdhpJ1MCjNoMK47VWMjb9e3w8d1gExip_KBw-XsMlAmNMiIilDL4HoYRZ5E",
        width: 1200,
        height: 630,
        alt: "কুঁড়েঘর ফাউন্ডেশন অফিশিয়াল ব্যানার",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "কুঁড়েঘর ফাউন্ডেশন — তারুণ্যের শক্তিতে সম্ভাবনার বিকাশ",
    description:
      "পাবলিক বিশ্ববিদ্যালয়ের শিক্ষার্থীদের পরিচালিত সম্পূর্ণ অরাজনৈতিক ও অলাভজনক স্বেচ্ছাসেবী মানবিক উদ্যোগ।",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD747y_hCBwsQtr9Fi-NKCl4bhIoGo2wnLkYAC8JICvTRQE94LjuwFka-FA4q0uvk-1qVfTklBDQ9dUS22wZZBwUi3Yv1bHLfSRsT7wStE2KetkMe6ys_SjfcdADMOy7s7N09CO4nFDXezoA0DeVDkmvIHWj0R6rMn4Q4dw0Srp2gGFjdhpJ1MCjNoMK47VWMjb9e3w8d1gExip_KBw-XsMlAmNMiIilDL4HoYRZ5E",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bn"
      className={`${hindSiliguri.variable} ${plusJakartaSans.variable} ${inter.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="font-body text-on-surface bg-surface antialiased flex flex-col min-h-screen">
        <JsonLd />
        <Header />
        {/* Generous top clearance on mobile (pt-32 sm:pt-32 md:pt-28) ensures no content sits under the fixed header */}
        <main className="flex-1 pt-32 sm:pt-32 md:pt-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
