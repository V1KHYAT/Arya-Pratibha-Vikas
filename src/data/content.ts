import { assetUrl } from "@/lib/utils";

export interface ProgramCardData {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  highlights: string[];
  ctaText: string;
  ctaHref: string;
  image: string;
}

export interface PillarData {
  number: string;
  title: string;
  description: string;
}

export interface SupportItem {
  id: string;
  title: string;
  category: string;
  description: string;
  details: string[];
  image?: string;
  isDark?: boolean;
}

export interface SelectionStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  details: string;
}

export interface FAQItem {
  category: string;
  question: string;
  answer: string;
}

export const APV_DATA = {
  meta: {
    fullName: "Arya Pratibha Vikas Sansthan",
    shortName: "APV",
    parentOrganization: "Arya Samaj",
    legacyYears: "145+",
    heritageMotto: "Krinvanto Vishwam Aryam",
    mottoTranslation: "Make This World Noble",
    headquarters: "15, Hanuman Road, New Delhi - 110001",
    centerName: "Sushil Raj Arya Pratibha Vikas Kendra",
    helpline: "+91 9311721172",
    altHelpline: "+91 9540002856",
    email: "info@pratibhavikas.org",
    affiliation: "Akhil Bharatiya Dayanand Sewashram Sangh (ABDSS)",
  },

  hero: {
    label: "ARYA PRATIBHA VIKAS SANSTHAN • AN INITIATIVE OF ARYA SAMAJ",
    headline: "Where potential finds a path to public service.",
    subheadline:
      "A philanthropic initiative by Arya Samaj dedicated to identifying, mentoring, and fully sponsoring meritorious civil service aspirants across India for UPSC (IAS, IPS, IFS, IRS) and State Public Services.",
    metrics: [
      { value: "100%", label: "Need-based sponsorship", sub: "Coaching fees & campus stay" },
      { value: "145+", label: "Years of social ethos", sub: "Under Arya Samaj" },
      { value: "Delhi", label: "Residential center", sub: "Sushil Raj Kendra" },
    ],
  },

  positioning: {
    label: "01 — ABOUT APV",
    statement:
      "We identify dedicated aspirants who want to contribute toward nation-building through the Civil Services, and ensure financial constraints never hold back potential talent.",
    description:
      "Arya Pratibha Vikas Sansthan (APV) provides complete sponsorship and end-to-end guidance for premier competitive examinations including the UPSC Civil Services Examination and State Public Service Commissions. We nurture candidates in an atmosphere anchored in honesty, integrity, devotion to duty, and selfless service to the common citizen.",
    values: [
      {
        number: "01",
        title: "Talent Hunt",
        description: "National search and competitive selection of meritorious candidates possessing aptitude, integrity, and dedication.",
      },
      {
        number: "02",
        title: "Equal Opportunity",
        description: "Ensuring no deserving aspirant lags behind in their civil service pursuit for want of financial resources.",
      },
      {
        number: "03",
        title: "Transcendent Training",
        description: "Integrated coaching partnerships, rigorous test series, and personalized mentor reviews for Prelims and Mains.",
      },
      {
        number: "04",
        title: "Essential Facilities",
        description: "Fully sponsored residential accommodation, 24/7 quiet study halls, and wholesome nutritious vegetarian meals.",
      },
    ] as PillarData[],
  },

  aryaSamaj: {
    label: "02 — ROOTED IN A LEGACY",
    title: "145+ years of social reform and nation-building.",
    founder: "Maharshi Dayanand Saraswati",
    foundedDate: "April 7, 1875",
    motto: "Krinvanto Vishwam Aryam (Make This World Noble)",
    narrative:
      "Founded by Maharshi Dayanand Saraswati in 1875, Arya Samaj has championed universal education, social justice, character building, and the eradication of superstition for over a century. APV extends this very philosophy into the sphere of civil governance: preparing ethical, grounded officers committed to selfless public welfare.",
    quote:
      "Doing good to the entire world is the prime objective of Arya Samaj, making people physically strong, spiritually enlightened, and socially uplifted.",
  },

  programs: [
    {
      id: "civil-services",
      title: "Civil Services Program",
      subtitle: "Comprehensive UPSC Preparation",
      badge: "UPSC CSE / State PSC",
      description:
        "Rigorous academic curriculum covering Prelims (GS + CSAT), Mains (GS I–IV, Essay, and Optional disciplines), followed by dedicated Personality Test panels.",
      highlights: [
        "Sponsored coaching at premier institutes in Delhi",
        "Optional subject specialization & answer evaluation",
        "Mock interview boards by retired & serving civil servants",
      ],
      ctaText: "Explore Program",
      ctaHref: "#programs",
      image: assetUrl("/assets/hero-4.jpg"),
    },
    {
      id: "fellowship",
      title: "APV Residential Fellowship",
      subtitle: "100% Sponsoring & Boarding",
      badge: "Merit-Based Fellowship",
      description:
        "Full residential fellowship awarded annually to selected candidates, covering lodging in New Delhi, nutritious vegetarian meals, and library resources with zero fees.",
      highlights: [
        "Sushil Raj Kendra hostel stay in New Delhi",
        "Quiet 24/7 library reading rooms with standard literature",
        "Pure hygienic vegetarian meals prepared daily",
      ],
      ctaText: "Explore Fellowship",
      ctaHref: "#fellowship",
      image: assetUrl("/assets/facility-hostel.jpg"),
    },
  ] as ProgramCardData[],

  supportSystem: [
    {
      id: "residential",
      title: "Sushil Raj Residential Kendra",
      category: "ACCOMMODATION & BOARDING",
      description:
        "A peaceful, disciplined residential facility in New Delhi that isolates candidates from city chaos, enabling 12–14 hours of focused, daily academic engagement.",
      details: [
        "Dedicated study rooms and study desks",
        "Compulsory residential living for peer discipline",
        "High-speed fiber connectivity & 24/7 power backup",
      ],
      isDark: true,
    },
    {
      id: "coaching-sponsorship",
      title: "100% Coaching Fee Sponsorship",
      category: "ACADEMIC SCHOLARSHIP",
      description:
        "APV sponsors classroom coaching fees at renowned coaching institutes in Delhi tailored to each fellow's optional subject and foundation needs.",
      details: [
        "Complete tuition fees paid directly by the Sansthan",
        "Prelims and Mains mock test evaluation series",
      ],
      image: assetUrl("/assets/hero-1.jpg"),
    },
    {
      id: "mentorship",
      title: "Officer & Academic Mentorship",
      category: "ONE-ON-ONE GUIDANCE",
      description:
        "Regular interaction and strategy sessions with serving & retired IAS/IPS officers, senior educators, and alumni rank holders.",
      details: [
        "Personalized feedback on Mains answer writing",
        "Interview guidance and personality development",
      ],
      image: assetUrl("/assets/memoir-1.jpg"),
    },
    {
      id: "nutrition",
      title: "Pure Sattvic Vegetarian Diet",
      category: "HEALTH & WELLNESS",
      description:
        "Nutritious, fresh vegetarian meals prepared daily under strict hygiene standards to maintain the physical stamina and mental alertness required for intense study.",
      details: [
        "Balanced daily breakfast, lunch, and dinner",
        "Prepared in-house with clean filtered water",
      ],
      image: assetUrl("/assets/memoir-2.jpg"),
    },
  ] as SupportItem[],

  skArya: {
    label: "04 — OUR INSPIRATION",
    name: "Shri Surendra Kumar Arya",
    title: "Industrialist, Philanthropist & Patron",
    organization: "Chairman, JBM Group",
    bio:
      "A pioneering industrialist who built the global JBM Group, Shri S.K. Arya's life embodies unshakeable determination, ethical leadership, and dedicated social responsibility. Deeply rooted in the teachings of Maharshi Dayanand Saraswati and Arya Samaj principles, he champions educational upliftment through the Neel Foundation and initiatives like Vishudha and APV, ensuring financial hardship never extinguishes an aspirant's flame.",
    quote:
      "Disciplined lifestyle, hard work with devotion, and moral responsibility toward society are the true building blocks of noble leadership.",
    image: assetUrl("/assets/sk-arya-small.png"),
  },

  otherPatrons: [
    {
      name: "Padma Bhushan Mahashay Dharampal",
      role: "Visionary Patron & MDH Founder",
      bio: "A revered philanthropist and Arya Samaj stalwart who dedicated immense resources toward free education, healthcare, and civil service empowerment.",
      image: assetUrl("/assets/mahashay-ji.png"),
    },
    {
      name: "Shri Raj Kumar",
      role: "Executive Trustee & Philanthropist",
      bio: "Committed to expanding the residential infrastructure and outreach of Sushil Raj Kendra so deserving youths from every region can access top-tier guidance.",
    },
  ],

  selectionProcess: [
    {
      step: "01",
      title: "Online Registration",
      subtitle: "Candidate Profile",
      description: "Aspirants register on pratibhavikas.org by submitting their Name, Email ID, and Mobile number.",
      details: "Opens annually in May; preliminary account creation.",
    },
    {
      step: "02",
      title: "Application Submission",
      subtitle: "Comprehensive Form",
      description: "Candidates log in and complete their academic history, optional subject choice, and socioeconomic background.",
      details: "Verification of graduation qualifications and UPSC eligibility criteria.",
    },
    {
      step: "03",
      title: "Preliminary Selection",
      subtitle: "Eligibility Screening",
      description: "Initial screening of applications. Shortlisted candidates receive official intimation via email for the written test.",
      details: "Objective verification of age, citizenship, and academic prerequisites.",
    },
    {
      step: "04",
      title: "Written Examination",
      subtitle: "Essay Paper (250 Marks)",
      description: "Candidates write two analytical essays (600–800 words each) chosen from 8 subjects divided into two groups of four.",
      details: "Held in New Delhi; 125 marks per essay testing depth and articulation.",
    },
    {
      step: "05",
      title: "Personality Test / GD",
      subtitle: "Interview Board",
      description: "Aspirants clearing the written exam appear for an in-person interview and group discussion with the APV board in Delhi.",
      details: "Assesses moral clarity, public service orientation, and analytical balance.",
    },
    {
      step: "06",
      title: "Final Selection & Induction",
      subtitle: "Fellowship Award",
      description: "Selected candidates are formally inducted into the new batch and move into the Sushil Raj Kendra residential campus.",
      details: "100% sponsored lodging, meals, and coaching commence immediately.",
    },
  ] as SelectionStep[],

  centres: [
    {
      name: "Sushil Raj Arya Pratibha Vikas Kendra",
      city: "New Delhi",
      address: "15, Hanuman Road, New Delhi - 110001",
      description:
        "The primary residential and academic facility of APV, providing peaceful accommodations, library reading rooms, faculty mentorship suites, and dining for all selected fellows.",
      image: assetUrl("/assets/facility-hostel.jpg"),
    },
  ],

  faqs: [
    {
      category: "General",
      question: "What does Arya Pratibha Vikas Sansthan (APV) do?",
      answer:
        "APV selects and sponsors the coaching and residential stay of academically meritorious candidates preparing for the UPSC Civil Services Examination (IAS, IPS, IFS, IRS) and elite State PSCs. APV covers 100% need-based coaching fees, Delhi accommodation, and meals.",
    },
    {
      category: "Eligibility",
      question: "Who can apply for the fellowship at APV?",
      answer:
        "Any Indian citizen holding a recognized Bachelor's degree (or appearing in their final semester) who meets the eligibility criteria prescribed by the Union Public Service Commission (UPSC) for the Civil Services Examination is eligible to apply.",
    },
    {
      category: "Accommodation",
      question: "Can APV Fellows choose to reside outside the hostel?",
      answer:
        "No. Selected APV Fellows are required to reside compulsorily at the Sushil Raj Arya Pratibha Vikas Kendra in New Delhi to ensure strict study discipline, peer learning, and regular faculty mentorship.",
    },
    {
      category: "Selection",
      question: "What is the structure of the entrance written test?",
      answer:
        "The written test is an Essay Paper of 250 marks. Candidates write two essays (600–800 words each, 125 marks each) selected from eight topics grouped into two sections of four topics each.",
    },
    {
      category: "Fees",
      question: "Are there any hidden fees or charges for selected fellows?",
      answer:
        "No. Selected fellows receive 100% sponsorship covering their Delhi accommodation, coaching fees at partnered premier institutes, library access, and vegetarian meals.",
    },
  ] as FAQItem[],
};
