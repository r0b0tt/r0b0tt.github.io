import type { ResumeData } from "~/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Antonio Maina",
  initials: "AM",
  location: "Nairobi, Kenya",
  locationLink: "https://www.google.com/maps/place/Nairobi,+Kenya",
  about: "Software engineer building scalable digital products",
  summary:
    "Software engineer based in Nairobi, Kenya. I design and build scalable web and mobile applications with a focus on user experience, cloud infrastructure, and DevOps. I incorporate AI-assisted development into my workflow to ship reliable, high-quality software efficiently.",
  avatarUrl: "/avatar.jpg",
  personalWebsiteUrl: "https://antoniomaina.com",
  contact: {
    email: "antoniomainakn@gmail.com",
    tel: "",
    social: [
      { name: "GitHub", url: "https://github.com/r0b0tt", icon: "github" },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/antoniomaina",
        icon: "linkedin",
      },
      { name: "X", url: "https://twitter.com/__r0b0t__", icon: "x" },
      { name: "Blog", url: "https://antonio.hashnode.dev", icon: "globe" },
      {
        name: "Instagram",
        url: "https://www.instagram.com/__r0b0t__",
        icon: "globe",
      },
    ],
  },
  education: [
    {
      school: "Jomo Kenyatta University of Agriculture and Technology",
      degree: "Bachelor's Degree in Computer Science",
      start: "2014",
      end: "2019",
    },
  ],
  work: [
    {
      company: "Chumz",
      link: "https://www.weza.io/",
      badges: ["Nairobi, Kenya"],
      title: "Senior Platform Engineer",
      start: "2019",
      end: null,
      description:
        "Building internal tools and platform infrastructure for the Chumz savings platform.",
      highlights: [
        "Customer research and setting up analytics for various products",
        "Building internal tools to support the core chumz.io platform such as the Fund Administration System and CRM",
        "Architecting the Chumz Leaderboard",
        "Assisting in architectural design of the Chumz core system",
      ],
    },
    {
      company: "Weza Ventures",
      link: "https://www.weza.io/",
      badges: ["Nairobi, Kenya"],
      title: "Software Engineer",
      start: "2020",
      end: null,
      description:
        "Leading development of Weza Ventures front-end applications and UI implementation.",
      highlights: [
        "Leading development and maintenance of weza.io front-end applications including the web dashboard and other internal dashboards",
        "Working with the design lead in creating and implementing user interface designs for all internal and external company projects",
        "Assist in implementing user interface designs on front-end applications for Weza's consultancy projects",
      ],
    },
    {
      company: "The Archangel Interactive",
      link: "https://wearearchangel.com/",
      badges: ["Nairobi, Kenya"],
      title: "Full Stack Developer",
      start: "2018",
      end: "2019",
      description:
        "Full stack development across frontend, backend, and infrastructure.",
      highlights: [
        "Translating designs into working frontend prototypes using HTML, SASS, Vanilla Javascript and ReactJS",
        "Creating Wordpress CMS instances for client products",
        "Designing and developing backend services using Python (Django and Flask)",
        "Writing scalable SASS/CSS using the ITCSS and BEM Methodologies",
        "Automating repetitive internal tasks using NodeJS",
        "Implementing Continuous Integration and Deployment pipelines for products",
        "Setting up and managing product infrastructure on AWS and Digital Ocean",
      ],
    },
  ],
  skills: [
    "JavaScript (ES6+)",
    "TypeScript",
    "HTML & (S)CSS",
    "React",
    "Next.js",
    "Python",
    "Django",
    "Flask",
    "Firebase",
    "AWS",
    "Google Cloud Platform",
    "Digital Ocean",
    "Express.js",
    "Metabase",
  ],
  projects: [
    {
      title: "Chuckies",
      techStack: ["React.js", "Redux", "Chuck Norris API"],
      description:
        "A simple website that generates quotes from the Chuck Norris API, which you can filter by category and share on Twitter.",
      link: {
        label: "chuckies.netlify.app",
        href: "https://chuckies.netlify.app/",
      },
    },
    {
      title: "Covid-19 App",
      techStack: ["Flutter", "Bloc Pattern", "REST APIs"],
      description:
        "A native mobile application built using Flutter that helps in tracking data relating to the Covid-19 pandemic and educating the public about the disease.",
      link: {
        label: "GitHub",
        href: "https://github.com/r0b0tt/covid19-app-flutter",
      },
    },
    {
      title: "Meeting Analyzer",
      techStack: ["Python", "Machine Learning", "Natural Language Processing"],
      description:
        "Helps analyze conversations that occur during online/recorded meetings, providing a summary, action points, and inferred statistics.",
    },
    {
      title: "ITCSS",
      techStack: ["Node.js", "NPM", "JavaScript (ES6)"],
      description:
        "A Node CLI module that helps bootstrap the basic structure of the ITCSS SASS methodology.",
      link: { label: "GitHub", href: "https://github.com/r0b0tt/itcss" },
    },
    {
      title: "Covid-19 Data Scraper",
      techStack: ["Python", "Serverless Architecture", "Google Cloud Platform"],
      description:
        "Scrapes data such as frequently asked questions relating to the Covid-19 pandemic on the web.",
      link: {
        label: "GitHub",
        href: "https://github.com/r0b0tt/covid19-scraper",
      },
    },
  ],
} as const;
