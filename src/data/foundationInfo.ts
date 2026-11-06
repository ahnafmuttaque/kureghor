export interface ImpactMetric {
  icon: string;
  value: string;
  label: string;
  color?: string;
}

export interface UniversityChapter {
  name: string;
  shortName: string;
  volunteers: string;
  role: string;
}

export const FOUNDATION_INFO = {
  name: "কুঁড়েঘর ফাউন্ডেশন",
  fullName: "কুঁড়েঘর অ্যাসোসিয়েশন / কুঁড়েঘর ফাউন্ডেশন",
  englishName: "Kureghor Foundation",
  establishedYear: "২০২১",
  tagline: "তারুণ্যের শক্তিতে সম্ভাবনার বিকাশ। নিঃস্বার্থ সেবায় আগামীর বাংলাদেশ।",
  description:
    "পাবলিক বিশ্ববিদ্যালয়ের শিক্ষার্থীদের পরিচালিত সম্পূর্ণ অরাজনৈতিক ও অলাভজনক স্বেচ্ছাসেবী মানবিক উদ্যোগ। শিক্ষা সহায়তা, বিনামূল্যে চিকিৎসা, পরিবেশ সুরক্ষা ও জরুরি মানবিক সহায়তায় নিবেদিত।",
  address: "সুন্দরগঞ্জ (৫৭২০), গাইবান্ধা, বাংলাদেশ",
  location: "সুন্দরগঞ্জ, গাইবান্ধা",
  phones: ["+880 1301-189345", "+880 1700-806629"],
  primaryPhone: "+880 1301-189345",
  email: "kureghorassociation@gmail.com",
  workingHours: "সকাল ৮:০০টা — রাত ১২:০০টা",
  whatsappUrl: "https://wa.me/8801903444717",
  whatsappNumber: "+880 1903-444717",
  facebookUrl: "https://www.facebook.com/KureghorFoundation2021/",
  volunteerFormUrl: "https://forms.gle/1Uq2LhvgTGUADfTFA",
  donationAccounts: {
    bkash: "01301189345",
    nagad: "01301189345",
    rocket: "01301189345",
    type: "Personal (Send Money)",
    referenceFormat: "ডাকনাম<space>জন্মসাল (যেমন: Raju 2003)",
  },
  metrics: [
    { icon: "nature", value: "১৮,৫০০+", label: "১২টি জেলায় রোপিত বৃক্ষ" },
    { icon: "calculate", value: "৪,২০০+", label: "মেন্টরশিপপ্রাপ্ত শিক্ষার্থী" },
    { icon: "health_and_safety", value: "৯,৮০০+", label: "বিনামূল্যে সেবাগ্রহীতা রোগী" },
    { icon: "groups", value: "১,৪০০+", label: "সক্রিয় বিশ্ববিদ্যালয় ভলান্টিয়ার" },
    { icon: "verified", value: "১০০%", label: "উন্মুক্ত পাবলিক অডিট লেজার" },
  ] as ImpactMetric[],
  historicalMetrics: {
    beneficiaries: "৫,০০০+",
    members: "২০০+",
    fundsRaised: "৩,০০,০০০৳+",
    eventsCompleted: "১২ টি",
  },
  universityChapters: [
    { name: "ঢাকা উইং", shortName: "ঢাবি", volunteers: "৩২০ জন ভলান্টিয়ার", role: "সমন্বয়ক শাখা" },
    { name: "বুয়েট চ্যাপ্টার", shortName: "বুয়েট", volunteers: "১৯০ জন ভলান্টিয়ার", role: "প্রযুক্তি ও লজিস্টিকস" },
    { name: "রাজশাহী উইং", shortName: "রাবি", volunteers: "২১০ জন ভলান্টিয়ার", role: "উত্তরবঙ্গ সমন্বয়" },
    { name: "চট্টগ্রাম উইং", shortName: "চবি", volunteers: "১৮০ জন ভলান্টিয়ার", role: "দক্ষিণ উইং" },
    { name: "সাস্ট ইউনিট", shortName: "সাস্ট", volunteers: "১৬০ জন ভলান্টিয়ার", role: "সিলেট বিভাগ" },
    { name: "জাহাঙ্গীরনগর", shortName: "জাবি", volunteers: "১৪০ জন ভলান্টিয়ার", role: "ফিল্ড অপারেশনস" },
  ] as UniversityChapter[],
  pillars: [
    {
      id: "education",
      number: "স্তম্ভ ০১",
      title: "মানসম্মত শিক্ষা ও বিজ্ঞান",
      icon: "school",
      color: "primary",
      description:
        "মাধ্যমিক গণিত অলিম্পিয়াড, বিজ্ঞান ব্যবহারিক কর্মশালা, সুবিধাবঞ্চিত বিদ্যালয়ে মেন্টরিং ও প্রত্যন্ত অঞ্চলের মেধাবীদের শিক্ষাবৃত্তির মাধ্যমে শিক্ষা বৈষম্য দূরীকরণ।",
      highlights: [
        "বিভাগীয় গণিত অলিম্পিয়াড",
        "বিজ্ঞান পরীক্ষা-নিরীক্ষা টুলকিট বিতরণ",
        "এসএসসি পরীক্ষার্থী মেন্টরশিপ সেল",
      ],
    },
    {
      id: "healthcare",
      number: "স্তম্ভ ০২",
      title: "জনস্বাস্থ্য ও রক্তদান নেটওয়ার্ক",
      icon: "medical_services",
      color: "secondary",
      description:
        "চরাঞ্চলের দুর্গম গ্রামে ভ্রাম্যমাণ ফ্রি মেডিকেল ক্যাম্প, চব্বিশ ঘণ্টা জরুরি স্বেচ্ছায় রক্তদান নেটওয়ার্ক সমন্বয় এবং বিনামূল্যে জরুরি প্রেসক্রিপশন ওষুধ বিতরণ।",
      highlights: [
        "চরাঞ্চলে ভ্রাম্যমাণ ক্লিনিক সেবা",
        "২৪/৭ বিশ্ববিদ্যালয় জরুরি ব্লাড নেটওয়ার্ক",
        "বিনামূল্যে প্রাথমিক স্বাস্থ্য পরীক্ষা",
      ],
    },
    {
      id: "environment",
      number: "স্তম্ভ ০৩",
      title: "পরিবেশ রক্ষা ও জলবায়ু কার্যক্রম",
      icon: "eco",
      color: "tertiary",
      description:
        "শিক্ষার্থী নার্সারির মাধ্যমে দেশীয় চারা উৎপাদন, দক্ষিণ উপকূলীয় জেলাসমূহে ম্যানগ্রোভ বনায়ন এবং ক্যাম্পাসগুলোতে একবার ব্যবহার্য প্লাস্টিক বর্জ্য বর্জন প্রচারণা।",
      highlights: [
        "উপকূলীয় ম্যানগ্রোভ ও বেড়িবাঁধ বনায়ন",
        "শিক্ষাপ্রতিষ্ঠানে ফলদ বৃক্ষ বিতরণ",
        "নদী ও ক্যাম্পাস পরিচ্ছন্নতা কর্মসূচি",
      ],
    },
    {
      id: "welfare",
      number: "স্তম্ভ ০৪",
      title: "যুব কল্যাণ ও মানবিক সহায়তা",
      icon: "directions_run",
      color: "primary-container",
      description:
        "মৌসুমি বন্যা ও তীব্র শৈত্যপ্রবাহে তাৎক্ষণিক ত্রাণ সহায়তা, তরুণদের সুস্থ জীবনধারায় বার্ষিক পিস ম্যারাথন এবং মাদকবিরোধী সামাজিক সচেতনতা সৃষ্টি।",
      highlights: [
        "উত্তরবঙ্গে শীতবস্ত্র ও উষ্ণতা বিতরণ",
        "'রান ফর পিস' যুব ম্যারাথন",
        "জরুরি বন্যা ও দুর্যোগ রেসপন্স ইউনিট",
      ],
    },
  ],
  financialTransparency: {
    fieldPrograms: "৯২%",
    fieldProgramsAmount: "৳১ কোটি ৪৮ লাখ",
    logistics: "৫%",
    logisticsAmount: "৳৮ লাখ ৪ হাজার",
    itGateway: "৩%",
    itGatewayAmount: "৳৪ লাখ ৮২ হাজার",
    executiveSalaries: "০%",
    politicalDues: "০%",
  },
};
