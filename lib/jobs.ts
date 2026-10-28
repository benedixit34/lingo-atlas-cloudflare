export type ListItem = string | { strong: string; text: string };

export interface JobSection {
  heading: string;
  items: ListItem[];
}

export interface Job {
  slug: string;
  /** <title> */
  title: string;
  /** <meta name="description"> */
  description: string;
  headline: { lead: string; highlight: string };
  heroText: string;
  /** The three chips shown under the hero text */
  chips: [string, string, string];
  aboutHeading: string;
  about: string;
  sections: JobSection[];
  applyText: string;
  overview: {
    position: string;
    location: string;
    arrangement: string;
    field: string;
  };
  enquiryMailto: string;
  /** Value of the hidden "position" field in the application form */
  formPosition: string;
  coverLetterPlaceholder: string;
}

export const jobs: Job[] = [
  {
    "slug": "digital-product-manager",
    "title": "Digital Product Manager | Afro-European Learning",
    "description": "Explore the Digital Product Manager opportunity at Afro-European Learning. Discover the role, requirements and how to apply.",
    "headline": {
      "lead": "Digital",
      "highlight": "Product Manager"
    },
    "heroText": "Drive product strategy and development by translating user needs and business goals into impactful digital solutions.",
    "chips": [
      "Greenock, Scotland",
      "Onsite",
      "Human Resource"
    ],
    "aboutHeading": "About the role",
    "about": "At Afro-European Business Services Ltd, we specialize in bridging markets and delivering exceptional B2B solutions across borders. We are looking for a strategic and user-focused Digital Product Manager to join our Greenock team and drive the development of our digital service platforms. As our Digital Product Manager, you will take ownership of our digital product lifecycle from ideation through to launch and scaling. You will sit at the intersection of business strategy, user experience, and technical execution—translating complex business needs into seamless digital experiences that serve our diverse client base.",
    "sections": [
      {
        "heading": "Key responsibilities",
        "items": [
          "Product Strategy & Roadmap: Define and manage the digital product roadmap, aligning feature releases with company goals and market demands.",
          "Cross-Functional Leadership: Collaborate with engineering, design, and marketing teams to ensure smooth sprint execution and timely product delivery.",
          "User-Centric Development: Champion the voice of the customer through user research, feedback analysis, and product analytics to drive continuous improvement.",
          "Requirements Gathering: Translate business needs into clear, actionable user stories, wireframes, and technical requirements.",
          "Go-to-Market Execution: Work with stakeholders to coordinate successful product launches, feature training, and promotional strategies.",
          "Performance Tracking: Define and monitor key performance indicators (KPIs) to measure product success and guide data-driven improvements."
        ]
      },
      {
        "heading": "What We’re Looking For",
        "items": [
          "Proven experience as a Product Manager, Digital Manager, or in a similar role overseeing digital products or B2B SaaS platforms.",
          "Strong understanding of agile methodologies, software development lifecycles, and modern digital architectures.",
          "Excellent communication skills, with the ability to translate technical concepts for non-technical stakeholders and business requirements for technical teams.",
          "Data-driven mindset with experience using product analytics tools to inform decisions and measure product performance.",
          "Experience with workflow automation, system integrations, or AI-driven tools is a strong advantage.",
          "Proactive problem-solver who thrives in a collaborative, fast-paced environment."
        ]
      },
      {
        "heading": "Why Join Us",
        "items": [
          "Competitive salary and performance-based incentives.",
          "Hybrid working model, with a base in our Greenock office.",
          "Opportunity to shape the digital future of a growing company with international reach.",
          "Commitment to professional development, continuous learning, and career growth."
        ]
      }
    ],
    "applyText": "Send your CV by email, highlighting your product management experience, strategic background, and relevant technical expertise.",
    "overview": {
      "position": "Digital Product Manager",
      "location": "Greenock, Scotland, UK",
      "arrangement": "Hybrid (Onsite & Remote)",
      "field": "Language Education"
    },
    "enquiryMailto": "mailto:aerecruitment@mylingoatlas.com?subject=Digital%20Product%20Manager%20Enquiry",
    "formPosition": "Digital Product Manager",
    "coverLetterPlaceholder": "Tell us about your product management experience and why you're interested in this role."
  },
  {
    "slug": "human-resource-manager",
    "title": "Human Resource Manager | Afro-European Learning",
    "description": "Explore the Human Resource Manager opportunity at Afro-European Learning. Discover the role, requirements and how to apply.",
    "headline": {
      "lead": "Human Resource",
      "highlight": "Manager"
    },
    "heroText": "Lead people strategy and HR operations, fostering a positive workplace culture while supporting talent development, employee engagement, and organisational growth.",
    "chips": [
      "Greenock, Scotland",
      "Onsite",
      "Language Education"
    ],
    "aboutHeading": "About the role",
    "about": "At Afro-European Business Services Ltd, we specialize in bridging markets and delivering exceptional B2B solutions across borders. Our success is built on the talent, dedication, and well-being of our people. We are looking for an experienced and empathetic Human Resources Manager to join our Greenock office and help us cultivate a thriving, inclusive, and high-performing workplace. The Role As our Human Resources Manager, you will be the cornerstone of our people strategy. You will oversee the entire employee lifecycle—from talent acquisition and onboarding to performance management and professional development. Reporting to the senior leadership team, you will ensure our HR practices align with our strategic business goals while fostering a positive and compliant working environment.",
    "sections": [
      {
        "heading": "Key responsibilities",
        "items": [
          {
            "strong": "Talent Acquisition & Onboarding:",
            "text": "Lead end-to-end recruitment processes to attract top talent and deliver a seamless onboarding experience for new hires."
          },
          {
            "strong": "Employee Relations & Support:",
            "text": "Act as the primary point of contact for employee inquiries, providing guidance, resolving conflicts, and promoting a positive workplace culture."
          },
          {
            "strong": "Performance Management:",
            "text": "Oversee performance review cycles, working with department heads to establish clear objectives, provide constructive feedback, and identify training needs."
          },
          {
            "strong": "HR Strategy & Policy:",
            "text": "Develop, implement, and update HR policies and procedures, ensuring strict compliance with UK employment laws and regulations."
          },
          {
            "strong": "Culture & Engagement:",
            "text": "Design and drive initiatives that boost employee engagement, well-being, and retention."
          },
          {
            "strong": "HR Administration & Reporting:",
            "text": "Maintain accurate employee records, manage payroll liaison, and track key HR metrics to provide data-driven insights to leadership."
          }
        ]
      },
      {
        "heading": "What We’re Looking For",
        "items": [
          "Proven experience as an HR Manager, HR Business Partner, or in a similar senior HR role.",
          "CIPD qualification (Level 5 or above highly desirable).",
          "In-depth knowledge of UK employment legislation and HR best practices.",
          "Exceptional interpersonal and communication skills, with the ability to build trust across all levels of the organisation.",
          "Strong conflict resolution and problem-solving abilities.",
          "A proactive approach to driving organisational change and fostering a diverse, inclusive culture."
        ]
      },
      {
        "heading": "Why Join Us",
        "items": [
          "Competitive salary and comprehensive benefits package.",
          "Flexible hybrid working options based at our Greenock hub.",
          "The opportunity to shape the culture and HR frameworks of a growing business.",
          "A supportive environment that values continuous professional development."
        ]
      }
    ],
    "applyText": "Send your CV by email, highlighting your product management experience, strategic background, and relevant technical expertise.",
    "overview": {
      "position": "Human Resource Manager",
      "location": "Greenock, Scotland, UK",
      "arrangement": "Full-time (Hybrid, Onsite)",
      "field": "Human Resources"
    },
    "enquiryMailto": "mailto:aerecruitment@mylingoatlas.com?subject=Human%20Resource%20Manager%20Enquiry",
    "formPosition": "Human Resource Manager",
    "coverLetterPlaceholder": "Tell us about your product management experience and why you're interested in this role."
  },
  {
    "slug": "yoruba-language-instructor",
    "title": "Yoruba Language Tutor | Afro-European Learning",
    "description": "Explore the Yoruba Language Tutor opportunity at Afro-European Learning. Discover the role, requirements and how to apply.",
    "headline": {
      "lead": "Yoruba Teaching",
      "highlight": "Professional"
    },
    "heroText": "Help learners develop their Yoruba language skills and connect with the culture through meaningful language education.",
    "chips": [
      "Greenock, Scotland",
      "Onsite",
      "Language Education"
    ],
    "aboutHeading": "About the role",
    "about": "Afro-European Learning is seeking a Yoruba Language Tutor to deliver language instruction and develop learning resources that help learners communicate effectively in Yoruba and understand its cultural context.",
    "sections": [
      {
        "heading": "Key responsibilities",
        "items": [
          "Teach Yoruba vocabulary, grammar, pronunciation, sentence structure, and everyday expressions.",
          "Prepare lesson plans, exercises, and learning materials suited to learners' proficiency levels.",
          "Help learners develop their speaking, listening, reading, and writing skills.",
          "Explain Yoruba idioms, language structures, and cultural nuances accurately.",
          "Research Yoruba language and culture to develop reliable educational resources.",
          "Assess learners' progress and provide constructive feedback."
        ]
      },
      {
        "heading": "Requirements",
        "items": [
          "Native proficiency in Yoruba.",
          "A background in teaching, education, or a related field.",
          "Strong research and information-gathering skills.",
          "Excellent command of English and strong written and verbal communication skills.",
          "Ability to explain language concepts clearly and adapt teaching methods to different learners.",
          "Willingness and ability to work onsite in Greenock, Scotland."
        ]
      }
    ],
    "applyText": "Send your CV by email, highlighting your Yoruba language proficiency, educational background, and relevant experience.",
    "overview": {
      "position": "Yoruba Language Tutor",
      "location": "Greenock, Scotland, UK",
      "arrangement": "Onsite",
      "field": "Language Education"
    },
    "enquiryMailto": "mailto:aerecruitment@mylingoatlas.com?subject=Yoruba%20Language%20Tutor%20Enquiry",
    "formPosition": "Yoruba Language Tutor",
    "coverLetterPlaceholder": "Tell us about your Yoruba language proficiency, teaching experience, and approach to language education."
  },
    {
    slug: "twi-teaching-professional",
    title: "Twi Teaching Professional | Afro-European Learning",
    description:
      "Explore the Twi Teaching Professional opportunity at Afro-European Learning. Discover the role, requirements and how to apply.",
    headline: {
      lead: "Twi Teaching",
      highlight: "Professional",
    },
    heroText:
      "Help learners develop their Twi language skills and connect with Ghanaian culture through meaningful language education.",
    chips: [
      "Greenock, Scotland",
      "Onsite",
      "Language Education",
    ],
    aboutHeading: "About the role",
    about:
      "Afro-European Learning is seeking a Twi Teaching Professional to deliver language instruction and develop learning resources that help learners communicate effectively in Twi and understand its cultural context.",
    sections: [
      {
        heading: "Key responsibilities",
        items: [
          "Teach Twi vocabulary, grammar, pronunciation, sentence structure, and everyday expressions.",
          "Prepare lesson plans, exercises, and learning materials suited to learners' proficiency levels.",
          "Help learners develop their speaking, listening, reading, and writing skills.",
          "Explain Twi idioms, language structures, and cultural nuances accurately.",
          "Research Twi language and Ghanaian culture to develop reliable educational resources.",
          "Assess learners' progress and provide constructive feedback.",
        ],
      },
      {
        heading: "Requirements",
        items: [
          "Native proficiency in Twi.",
          "A background in teaching, education, or a related field.",
          "Strong research and information-gathering skills.",
          "Excellent command of English and strong written and verbal communication skills.",
          "Ability to explain language concepts clearly and adapt teaching methods to different learners.",
          "Willingness and ability to work onsite in Greenock, Scotland.",
        ],
      },
    ],
    applyText:
      "Send your CV by email, highlighting your Twi language proficiency, educational background, and relevant experience.",
    overview: {
      position: "Twi Teaching Professional",
      location: "Greenock, Scotland, UK",
      arrangement: "Onsite",
      field: "Language Education",
    },
    enquiryMailto:
      "mailto:aerecruitment@mylingoatlas.com?subject=Twi%20Teaching%20Professional%20Enquiry",
    formPosition: "Twi Teaching Professional",
    coverLetterPlaceholder:
      "Tell us about your Twi language proficiency, teaching experience, and approach to language education.",
  },
  {
    slug: "urdu-teaching-professional",
    title: "Urdu Teaching Professional | Afro-European Learning",
    description:
      "Explore the Urdu Teaching Professional opportunity at Afro-European Learning. Discover the role, requirements and how to apply.",
    headline: {
      lead: "Urdu Teaching",
      highlight: "Professional",
    },
    heroText:
      "Help learners develop their Urdu language skills and explore the rich cultural heritage of Urdu-speaking communities through meaningful language education.",
    chips: [
      "Greenock, Scotland",
      "Onsite",
      "Language Education",
    ],
    aboutHeading: "About the role",
    about:
      "Afro-European Learning is seeking an Urdu Teaching Professional to deliver language instruction and develop learning resources that help learners communicate effectively in Urdu and understand its cultural context.",
    sections: [
      {
        heading: "Key responsibilities",
        items: [
          "Teach Urdu vocabulary, grammar, pronunciation, sentence structure, and everyday expressions.",
          "Prepare lesson plans, exercises, and learning materials suited to learners' proficiency levels.",
          "Help learners develop their speaking, listening, reading, and writing skills.",
          "Teach Urdu script and support learners in developing reading and writing proficiency.",
          "Explain Urdu idioms, language structures, and cultural nuances accurately.",
          "Research Urdu language and culture to develop reliable educational resources.",
          "Assess learners' progress and provide constructive feedback.",
        ],
      },
      {
        heading: "Requirements",
        items: [
          "Native proficiency in Urdu.",
          "A background in teaching, education, or a related field.",
          "Strong research and information-gathering skills.",
          "Excellent command of English and strong written and verbal communication skills.",
          "Ability to explain language concepts clearly and adapt teaching methods to different learners.",
          "Willingness and ability to work onsite in Greenock, Scotland.",
        ],
      },
    ],
    applyText:
      "Send your CV by email, highlighting your Urdu language proficiency, educational background, and relevant experience.",
    overview: {
      position: "Urdu Teaching Professional",
      location: "Greenock, Scotland, UK",
      arrangement: "Onsite",
      field: "Language Education",
    },
    enquiryMailto:
      "mailto:aerecruitment@mylingoatlas.com?subject=Urdu%20Teaching%20Professional%20Enquiry",
    formPosition: "Urdu Teaching Professional",
    coverLetterPlaceholder:
      "Tell us about your Urdu language proficiency, teaching experience, and approach to language education.",
  },
  {
    slug: "igbo-teaching-professional",
    title: "Igbo Teaching Professional | Afro-European Learning",
    description:
      "Explore the Igbo Teaching Professional opportunity at Afro-European Learning. Discover the role, requirements and how to apply.",
    headline: {
      lead: "Igbo Teaching",
      highlight: "Professional",
    },
    heroText:
      "Help learners develop their Igbo language skills and connect with Igbo culture and heritage through meaningful language education.",
    chips: [
      "Greenock, Scotland",
      "Onsite",
      "Language Education",
    ],
    aboutHeading: "About the role",
    about:
      "Afro-European Learning is seeking an Igbo Teaching Professional to deliver language instruction and develop learning resources that help learners communicate effectively in Igbo and understand its cultural context.",
    sections: [
      {
        heading: "Key responsibilities",
        items: [
          "Teach Igbo vocabulary, grammar, pronunciation, sentence structure, and everyday expressions.",
          "Prepare lesson plans, exercises, and learning materials suited to learners' proficiency levels.",
          "Help learners develop their speaking, listening, reading, and writing skills.",
          "Explain Igbo idioms, language structures, and cultural nuances accurately.",
          "Research Igbo language and culture to develop reliable educational resources.",
          "Assess learners' progress and provide constructive feedback.",
        ],
      },
      {
        heading: "Requirements",
        items: [
          "Native proficiency in Igbo.",
          "A background in teaching, education, or a related field.",
          "Strong research and information-gathering skills.",
          "Excellent command of English and strong written and verbal communication skills.",
          "Ability to explain language concepts clearly and adapt teaching methods to different learners.",
          "Willingness and ability to work onsite in Greenock, Scotland.",
        ],
      },
    ],
    applyText:
      "Send your CV by email, highlighting your Igbo language proficiency, educational background, and relevant experience.",
    overview: {
      position: "Igbo Teaching Professional",
      location: "Greenock, Scotland, UK",
      arrangement: "Onsite",
      field: "Language Education",
    },
    enquiryMailto:
      "mailto:aerecruitment@mylingoatlas.com?subject=Igbo%20Teaching%20Professional%20Enquiry",
    formPosition: "Igbo Teaching Professional",
    coverLetterPlaceholder:
      "Tell us about your Igbo language proficiency, teaching experience, and approach to language education.",
  }
];

export function getJob(slug: string): Job | undefined {
  return jobs.find((job) => job.slug === slug);
}
