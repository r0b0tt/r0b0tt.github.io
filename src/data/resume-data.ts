import type { ResumeData } from "~/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Antonio Maina",
  initials: "AM",
  location: "Nairobi, Kenya",
  locationLink: "https://www.google.com/maps/place/Nairobi,+Kenya",
  about: "Software engineer building scalable digital products",
  summary:
    "Software engineer based in Nairobi, Kenya. I design and build scalable web and mobile applications with a focus on user experience, cloud infrastructure, and DevOps. I incorporate AI-assisted development into my workflow to ship reliable, high-quality software efficiently.",
  avatarUrl:
    "https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Ftalent%2F992337%2Fpicture%2Foptimized%2Fhuge_ed0fcf7de3882206b9a0c20301a34b6b-1b1d363b6c829b825c9fb2bdb9ddd5ff.jpg&width=480&quality=75",
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
      company: "Moneto Ventures",
      link: "https://chumz.io/",
      badges: ["Nairobi, Kenya"],
      title: "Senior Software Engineer",
      start: "2019",
      end: null,
      description: "",
      roles: [
        {
          title: "Senior Software Engineer",
          start: "2025",
          end: null,
          description:
            "Leading engineering on the Chumz savings platform and internal tooling.",
          highlights: [
            "Leading development of core platform features and internal tools",
            "Architecting the Chumz Leaderboard and related gamification systems",
            "Assisting in architectural design of the Chumz core system",
            "Mentoring engineers and driving technical standards across the team",
          ],
        },
        {
          title: "Software Engineer",
          start: "2019",
          end: "2022",
          description:
            "Building and maintaining the Chumz savings platform and supporting internal tools.",
          highlights: [
            "Customer research and setting up analytics for various products",
            "Building internal tools such as the Fund Administration System and CRM",
            "Developing features for the core chumz.io platform",
            "Collaborating on product and infrastructure improvements",
          ],
        },
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
      company: "Deckers",
      link: "https://www.deckers.com/",
      badges: ["Remote"],
      title: "Front-end/AWS Developer",
      start: "2022",
      end: "2026",
      contractVia: "Toptal",
      contractViaLink: "https://www.toptal.com/developers/resume/antonio-maina",
      description:
        "Front-end and AWS development for Deckers US, delivering scalable UI components and cloud infrastructure.",
      highlights: [
        "Owned end-to-end UI implementation using React and TypeScript, delivering reusable, scalable components from design to production",
        "Improved system reliability by implementing automated test suites, structured logging, Datadog monitoring, and standardized PR review processes",
        "Maintained CI/CD pipelines using AWS CloudFormation, CodeBuild, and CodePipeline, enabling automated deployments and reducing release time",
        "Migrated legacy functionality from on-premise systems to serverless AWS architecture",
      ],
    },
    {
      company: "Just Home",
      link: "https://justhome.com/en",
      badges: ["Remote"],
      title: "Front-end Engineer",
      start: "2022",
      end: "2022",
      contractVia: "Toptal",
      contractViaLink: "https://www.toptal.com/developers/resume/antonio-maina",
      description:
        "Front-end development for a mortgage platform helping people find the best rates in Germany.",
      highlights: [
        "Helped develop a web platform using Next.js that helps people get the best mortgage rates in Germany",
        "Migrated the platform from a Create React App application to Next.js",
        "Wrote unit tests using Jest and Testing Library and end-to-end tests using Cypress",
        "Assisted in migrating the UI from Bootstrap to a component-driven approach using Tailwind CSS",
        "Oversaw setting up identity and access management in the front end using Keycloak",
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
