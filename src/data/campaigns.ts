export interface Campaign {
  id: string;
  slug: string;
  title: string;
  category: string;
  status: "active" | "upcoming" | "completed";
  badge: string;
  targetInfo: string;
  stageInfo: string;
  image: string;
  altText: string;
  description: string;
  raisedAmount?: number;
  targetAmount?: number;
  progressPercent?: number;
  year: string;
  date?: string;
  venue?: string;
  beneficiariesCount?: number;
  beneficiariesBreakdown?: { area: string; count: string }[];
  goodsDistributed?: { name: string; quantity: string }[];
  budgetSummary?: {
    income: string;
    expense: string;
    remaining: string;
  };
  guests?: { name: string; designation: string }[];
}

export const CAMPAIGNS: Campaign[] = [
  {
    id: "olympiad-publician2025",
    slug: "olympiad-publician2025",
    title: "জাতীয় শিক্ষার্থী গণিত অলিম্পিয়াড ও বিজ্ঞান মেলা (Dreamers Hunt 1.0)",
    category: "শিক্ষা কার্যক্রম",
    status: "active",
    badge: "শিক্ষা কার্যক্রম",
    targetInfo: "৪৫টি বিদ্যালয়",
    stageInfo: "পর্যায় ৩ (মোট ৪)",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2b55bm2Syx1VODEUQMpj-R2FmquYsrELDwjsskvmu8HQeYIvLq1LTE1zBLC3yaDM-9gV-wo75cO03L8rxREHLAc9HF3C6DBZ1-w7Ek8b_KEiF9IkgidUwu3KhO3TVtTuORo8MJ9vJ9Bum3ZEOd-oa9zGA3FeOkxjPqTl6IDhFInH5POdtATQgWkzrMPerLAfseSl5JhHTxn1h0HUakP_Vj3q8R5UBM2vOO6Z8vf0",
    altText: "শিক্ষার্থী গণিত অলিম্পিয়াড ও বিজ্ঞান পরীক্ষা কার্যক্রম",
    description: "কুড়িগ্রাম ও গাইবান্ধার ৪৫টি সুবিধাবঞ্চিত মাধ্যমিক বিদ্যালয়ে গণিত অলিম্পিয়াড ওয়ার্কবুক, ব্যবহারিক বিজ্ঞান কিট ও বিশ্ববিদ্যালয় শিক্ষার্থীদের নিয়মিত মেন্টরিং প্রদান।",
    raisedAmount: 280000,
    targetAmount: 350000,
    progressPercent: 80,
    year: "২০২৫",
    date: "০৪ অক্টোবর ২০২৫ খ্রিঃ",
    venue: "ধুবনী কঞ্চিবাড়ি উচ্চ বিদ্যালয়",
    guests: [
      { name: "মোঃ মোনোয়ার আলম", designation: "চেয়ারম্যান, ১২ নং কঞ্চিবাড়ি ইউনিয়ন" },
      { name: "মোঃ মাহবুব আলম", designation: "অধ্যক্ষ, ধুবনী কঞ্চিবাড়ি ডিগ্রী কলেজ" },
      { name: "মোঃ মাসুদুর রহমান", designation: "প্রধান শিক্ষক, ধুবনী কঞ্চিবাড়ি উচ্চ বিদ্যালয়" },
      { name: "মোঃ আতাহার আলী", designation: "সহযোগী অধ্যাপক, সুন্দরগঞ্জ ডিগ্রী মহিলা কলেজ" },
      { name: "হান্নান মিয়া", designation: "শিক্ষা ক্যাডার, ৩৬ তম বিসিএস" },
      { name: "মেহেদি হাসান সাফি", designation: "এম. এস. সি., বুয়েট" },
    ],
  },
  {
    id: "tree-plantation-campaign",
    slug: "tree-plantation-campaign",
    title: "সবুজ ক্যাম্পাস ও নদীভাঙন রক্ষা বৃক্ষরোপণ অভিযান",
    category: "বনায়ন অভিযান",
    status: "active",
    badge: "বনায়ন অভিযান",
    targetInfo: "লক্ষ্য: ২৫,০০০ চারা",
    stageInfo: "সম্পন্নের পথে: ৯৫%",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDk1xPw-BgA5KdQypmyVXHGKBVBCjqyeoG3JQgqWYR-Cra6ZPBaxEFliskOPsYl7ZqudShuhHtVanKVbnXJzNqzWVEqv4CluBofNKqdUmypK1mcFLBGcV-QAFkoaoCSRrGRdez9Wd5Lll1KoLnpV5iAC_S-4i-tdMsWyO-zXHEkRv1X2eamKtuDay5i1sW5RTvZbpMHquE2N5-nfaOSNyKCt8fdrHualk6BsWwq0jM",
    altText: "নদীভাঙন ও উপকূলীয় বাঁধে শিক্ষার্থীদের বৃক্ষরোপণ অভিযান",
    description: "১২টি বিশ্ববিদ্যালয় প্রাঙ্গণে ফলদ ও বনজ চারা বিতরণ এবং নদীভাঙন কবলিত তিস্তা ও ব্রহ্মপুত্র বেড়িবাঁধে জলবায়ু সহনশীল বৃক্ষ রোপণ।",
    raisedAmount: 190000,
    targetAmount: 200000,
    progressPercent: 95,
    year: "২০২৫–২০২৬",
  },
  {
    id: "free-medical2026",
    slug: "free-medical2026",
    title: "প্রত্যন্ত চরাঞ্চলে ফ্রি মেডিকেল ক্যাম্প ও জরুরি চিকিৎসা ২০২৬",
    category: "মেডিকেল ক্যাম্প",
    status: "upcoming",
    badge: "আসছে ২০২৬",
    targetInfo: "চর অঞ্চল ইউনিট",
    stageInfo: "বিনামূল্যে ওষুধ ও চেকআপ",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPcZ5fx9A9phHrzWIu6LRsKuEnMiotWf9wy9jsynMQZA00oklIXZYrvodGDouH1uaEcerSVa59omZfNG7jPx8EfqkSQ43SR-v8yYaLNd4xeK8huf3vxfIqFTnGXm1F-3sy8USB3PfmAZBbueYiHLUgFAiSVQhgWoGT7dV8xIFMeAGI7rfcprXOoGrUT6MDrwPOKISkC17EsJnCkF_a9LNhQR0VUGd7duWP-6AvDfc",
    altText: "প্রত্যন্ত চরাঞ্চলে ভ্রাম্যমাণ ফ্রি মেডিকেল ক্যাম্প",
    description: "সুন্দরগঞ্জের বিচ্ছিন্ন চরে শিক্ষানবিস চিকিৎসক ও ইন্টার্নদের মাধ্যমে মৌলিক স্বাস্থ্যসেবা, রক্ত পরীক্ষা ও বিনামূল্যে জেনেরিক প্রেসক্রিপশন ওষুধ পৌঁছে দেওয়া।",
    raisedAmount: 410000,
    targetAmount: 500000,
    progressPercent: 82,
    year: "২০২৬",
  },
  {
    id: "eid2026",
    slug: "eid2026",
    title: "ঈদ সামগ্রী বিতরণ প্রোগ্রাম - ২০২৬ (আসন্ন)",
    category: "মানবিক সহায়তা",
    status: "upcoming",
    badge: "আসছে ২০২৬",
    targetInfo: "সুবিধাবঞ্চিত পরিবার",
    stageInfo: "তহবিল সংগ্রহ চলমান",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCb9xWe0eavSR-mlQuxIyc_XE9R_h__hnUk-t-ySCapeX5q9ZlKY0VFM0nDcsC3xDGZdueNP3H-wH14TEQuC2A58gqknxV0abvROfyZZlrI6L95xS3_euZ_iX7lxx7OI7pDLz0tcdgb1aWvSFtKIMcXQNX_6nw8x8_euTYx3WR2v5jS6sfW1kctvPstA8pbmj9H4sP-MzwMQ4uaE4aIUmPqwcTNwHO2H4yQYqouBfU",
    altText: "ঈদ সামগ্রী বিতরণ প্রোগ্রাম ২০২৬ প্রস্তুতি",
    description: "পবিত্র রমজান ও ঈদ-উল-ফিতর উপলক্ষে তিস্তা ও ব্রহ্মপুত্র অববাহিকার অসচ্ছল ও প্রবীণ পরিবারগুলোর ঘরে ঈদের খাদ্যপ্যাকেজ পৌঁছে দেওয়ার উদ্যোগ।",
    raisedAmount: 140000,
    targetAmount: 200000,
    progressPercent: 70,
    year: "২০২৬",
  },
  {
    id: "eid2025",
    slug: "eid2025",
    title: "ঈদ সামগ্রী বিতরণ প্রোগ্রাম - ২০২৫",
    category: "মানবিক সহায়তা",
    status: "completed",
    badge: "সফলভাবে সম্পন্ন",
    targetInfo: "৯৩টি পরিবার",
    stageInfo: "১০০% বণ্টিত",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2b55bm2Syx1VODEUQMpj-R2FmquYsrELDwjsskvmu8HQeYIvLq1LTE1zBLC3yaDM-9gV-wo75cO03L8rxREHLAc9HF3C6DBZ1-w7Ek8b_KEiF9IkgidUwu3KhO3TVtTuORo8MJ9vJ9Bum3ZEOd-oa9zGA3FeOkxjPqTl6IDhFInH5POdtATQgWkzrMPerLAfseSl5JhHTxn1h0HUakP_Vj3q8R5UBM2vOO6Z8vf0",
    altText: "ঈদসামগ্রী বিতরণ ২০২৫",
    description: "পবিত্র ঈদ-উল-ফিতর ২০২৫ উপলক্ষ্যে সুন্দরগঞ্জের ৫টি ইউনিয়নের ৯৩টি অসচ্ছল পরিবারে খাদ্যপ্যাকেজ বিতরণ।",
    year: "২০২৫",
    beneficiariesCount: 93,
    beneficiariesBreakdown: [
      { area: "কঞ্চিবাড়ি", count: "৩১ টি পরিবার" },
      { area: "পাচপীর", count: "২৩ টি পরিবার" },
      { area: "বেলকা", count: "২১ টি পরিবার" },
      { area: "মজুমদার", count: "১১ টি পরিবার" },
      { area: "শোভাগঞ্জ", count: "০৭ টি পরিবার" },
    ],
    budgetSummary: {
      income: "২৩,৭৭৫ ৳",
      expense: "২৩,৪০৫ ৳",
      remaining: "৩৭০ ৳",
    },
    goodsDistributed: [
      { name: "সেমাই", quantity: "১ কেজি" },
      { name: "চিনি", quantity: "০.৫ কেজি" },
      { name: "গুঁড়োদুধ", quantity: "২ প্যাকেট" },
      { name: "কিশমিশ", quantity: "৫০ গ্রাম" },
      { name: "মুড়ি", quantity: "২ প্যাকেট" },
      { name: "ডাল", quantity: "০.৫ কেজি" },
      { name: "তেল", quantity: "১ লিটার" },
      { name: "সাবান", quantity: "২ টি" },
    ],
  },
  {
    id: "dreamers-hunt-1-0",
    slug: "dreamers-hunt-1-0",
    title: "স্কুল অলিম্পিয়াড — DREAMERS HUNT 1.0",
    category: "শিক্ষা কার্যক্রম",
    status: "completed",
    badge: "সফলভাবে সম্পন্ন",
    targetInfo: "১৫৫ জন শিক্ষার্থী",
    stageInfo: "পুরষ্কৃত ৮ জন",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2b55bm2Syx1VODEUQMpj-R2FmquYsrELDwjsskvmu8HQeYIvLq1LTE1zBLC3yaDM-9gV-wo75cO03L8rxREHLAc9HF3C6DBZ1-w7Ek8b_KEiF9IkgidUwu3KhO3TVtTuORo8MJ9vJ9Bum3ZEOd-oa9zGA3FeOkxjPqTl6IDhFInH5POdtATQgWkzrMPerLAfseSl5JhHTxn1h0HUakP_Vj3q8R5UBM2vOO6Z8vf0",
    altText: "ড্রিমার্স হান্ট ১.০ স্কুল অলিম্পিয়াড",
    description: "কুঁড়েঘর অ্যাসোসিয়েশন আয়োজিত প্রথম শিক্ষামূলক আয়োজন Dreamers Hunt 1.0 যার মূল লক্ষ্য ছিলো গ্রামীণ শিক্ষার্থীদের আধুনিক শিক্ষাব্যবস্থার সাথে পরিচয় করিয়ে দেওয়া।",
    year: "২০২৫",
    beneficiariesCount: 155,
    beneficiariesBreakdown: [
      { area: "দশম শ্রেণি (বিজ্ঞান)", count: "৩৫ জন" },
      { area: "দশম শ্রেণি (মানবিক)", count: "২৩ জন" },
      { area: "নবম শ্রেণি (বিজ্ঞান)", count: "৪৯ জন" },
      { area: "নবম শ্রেণি (মানবিক)", count: "৪৮ জন" },
    ],
    budgetSummary: {
      income: "১,৯৪০ ৳",
      expense: "১,৯৪০ ৳",
      remaining: "০০ ৳",
    },
  },
  {
    id: "eid2024",
    slug: "eid2024",
    title: "ঈদ সামগ্রী বিতরণ প্রোগ্রাম - ২০২৪",
    category: "মানবিক সহায়তা",
    status: "completed",
    badge: "সফলভাবে সম্পন্ন",
    targetInfo: "৪৪টি পরিবার",
    stageInfo: "১০০% বণ্টিত",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCb9xWe0eavSR-mlQuxIyc_XE9R_h__hnUk-t-ySCapeX5q9ZlKY0VFM0nDcsC3xDGZdueNP3H-wH14TEQuC2A58gqknxV0abvROfyZZlrI6L95xS3_euZ_iX7lxx7OI7pDLz0tcdgb1aWvSFtKIMcXQNX_6nw8x8_euTYx3WR2v5jS6sfW1kctvPstA8pbmj9H4sP-MzwMQ4uaE4aIUmPqwcTNwHO2H4yQYqouBfU",
    altText: "ঈদ সামগ্রী বিতরণ ২০২৪",
    description: "রমজান মাসে অবহেলিত মানুষের সাথে ঈদ-আনন্দ ভাগাভাগি করার উদ্দেশ্যে ৫টি ইউনিয়নে ৪৪টি পরিবারের ঘরে ঈদ উপহার পৌঁছে দেওয়া হয়।",
    year: "২০২৪",
    beneficiariesCount: 44,
    beneficiariesBreakdown: [
      { area: "কঞ্চিবাড়ি", count: "১৫ টি পরিবার" },
      { area: "পাচপীর", count: "১১ টি পরিবার" },
      { area: "বেলকা", count: "০৯ টি পরিবার" },
      { area: "মজুমদার", count: "০৬ টি পরিবার" },
      { area: "শোভাগঞ্জ", count: "০৩ টি পরিবার" },
    ],
    budgetSummary: {
      income: "১২,৫০০ ৳",
      expense: "১২,৫০০ ৳",
      remaining: "০০ ৳",
    },
    goodsDistributed: [
      { name: "সেমাই", quantity: "১ কেজি" },
      { name: "চিনি", quantity: "০.২৫ কেজি" },
      { name: "গুঁড়োদুধ", quantity: "২ প্যাকেট" },
      { name: "আটা", quantity: "০.৫ কেজি" },
      { name: "মুড়ি", quantity: "১ প্যাকেট" },
      { name: "ডাল", quantity: "০.২৫ কেজি" },
      { name: "সয়াবিন তেল", quantity: "০.২৫ লিটার" },
      { name: "গুড়া সাবান", quantity: "১ টি" },
    ],
  },
  {
    id: "eid2022",
    slug: "eid2022",
    title: "ঈদ সামগ্রী বিতরণ প্রোগ্রাম - ২০২২",
    category: "মানবিক সহায়তা",
    status: "completed",
    badge: "সফলভাবে সম্পন্ন",
    targetInfo: "৩৫টি পরিবার",
    stageInfo: "১০০% বণ্টিত",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCb9xWe0eavSR-mlQuxIyc_XE9R_h__hnUk-t-ySCapeX5q9ZlKY0VFM0nDcsC3xDGZdueNP3H-wH14TEQuC2A58gqknxV0abvROfyZZlrI6L95xS3_euZ_iX7lxx7OI7pDLz0tcdgb1aWvSFtKIMcXQNX_6nw8x8_euTYx3WR2v5jS6sfW1kctvPstA8pbmj9H4sP-MzwMQ4uaE4aIUmPqwcTNwHO2H4yQYqouBfU",
    altText: "ঈদ সামগ্রী বিতরণ ২০২২",
    description: "সুন্দরগঞ্জের ৫টি ইউনিয়নে ৩৫টি অসহায় পরিবারে ঈদ খাদ্যসামগ্রী বিতরণ ও ইফতার আয়োজন।",
    year: "২০২২",
    beneficiariesCount: 35,
    beneficiariesBreakdown: [
      { area: "কঞ্চিবাড়ি", count: "১৫ টি পরিবার" },
      { area: "পাচপীর", count: "১০ টি পরিবার" },
      { area: "বেলকা", count: "০২ টি পরিবার" },
      { area: "মজুমদার", count: "০৬ টি পরিবার" },
      { area: "শোভাগঞ্জ", count: "০২ টি পরিবার" },
    ],
    budgetSummary: {
      income: "৫,৫০০ ৳",
      expense: "৫,৫০০ ৳",
      remaining: "০০ ৳",
    },
  },
  {
    id: "eid2021",
    slug: "eid2021",
    title: "ঈদ সামগ্রী বিতরণ প্রোগ্রাম - ২০২১ (প্রথম উদ্যোগ)",
    category: "মানবিক সহায়তা",
    status: "completed",
    badge: "প্রতিষ্ঠাকালীন প্রকল্প",
    targetInfo: "১১টি পরিবার",
    stageInfo: "১০০% বণ্টিত",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCb9xWe0eavSR-mlQuxIyc_XE9R_h__hnUk-t-ySCapeX5q9ZlKY0VFM0nDcsC3xDGZdueNP3H-wH14TEQuC2A58gqknxV0abvROfyZZlrI6L95xS3_euZ_iX7lxx7OI7pDLz0tcdgb1aWvSFtKIMcXQNX_6nw8x8_euTYx3WR2v5jS6sfW1kctvPstA8pbmj9H4sP-MzwMQ4uaE4aIUmPqwcTNwHO2H4yQYqouBfU",
    altText: "ঈদ সামগ্রী বিতরণ ২০২১ প্রথম আয়োজন",
    description: "কুঁড়েঘর অ্যাসোসিয়েশনের প্রতিষ্ঠালগ্নে প্রথমবারের মতো অবহেলিত মানুষের সাথে ঈদ-আনন্দ ভাগাভাগি করার উদ্দেশ্যে ১১টি পরিবারে খাদ্য উপহার বিতরণ।",
    year: "২০২১",
    beneficiariesCount: 11,
    beneficiariesBreakdown: [
      { area: "কঞ্চিবাড়ি", count: "০৭ টি পরিবার" },
      { area: "পাচপীর", count: "০১ টি পরিবার" },
      { area: "বেলকা", count: "০১ টি পরিবার" },
      { area: "মজুমদার", count: "০১ টি পরিবার" },
      { area: "শোভাগঞ্জ", count: "০১ টি পরিবার" },
    ],
    budgetSummary: {
      income: "১,১০০ ৳",
      expense: "১,১০০ ৳",
      remaining: "০০ ৳",
    },
  },
];
