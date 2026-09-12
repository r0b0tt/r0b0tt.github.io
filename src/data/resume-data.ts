import type { ResumeData } from "~/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Antonio Maina",
  initials: "AM",
  location: "Nairobi, Kenya",
  locationLink: "https://www.google.com/maps/place/Nairobi,+Kenya",
  about:
    "Senior full-stack TypeScript engineer building fintech and mobile products",
  summary:
    "Senior full-stack engineer with eight years of experience, mostly in fintech, working across TypeScript, React Native, Next.js and AWS. Founding engineer at Moneto Ventures, where I built M-Pesa payments for Chumz and now lead engineering across Kenya and Rwanda, including team standards for AI coding tools. Spent four years with Deckers Brands through Toptal on an internal order management service built on serverless AWS.",
  avatarUrl:
    "https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Ftalent%2F992337%2Fpicture%2Foptimized%2Fhuge_ed0fcf7de3882206b9a0c20301a34b6b-1b1d363b6c829b825c9fb2bdb9ddd5ff.jpg&width=480&quality=75",
  personalWebsiteUrl: "https://antoniomaina.com",
  contact: {
    email: "antoniomainakn@gmail.com",
    tel: "+254708342042",
    social: [
      { name: "GitHub", url: "https://github.com/r0b0tt", icon: "github" },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/antonio-maina",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "Jomo Kenyatta University of Agriculture and Technology",
      degree: "Bachelor of Science in Computer Science",
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
            "Returned to lead engineering on Moneto's savings and investment products and internal tools.",
          highlights: [
            {
              text: "Merged the separate Chumz app and website repos into a Turborepo monorepo so Chumz (Kenya) and Tunzi (Rwanda) ship from one codebase and stay at feature parity, with only branding, payment providers and market config changing per country",
              links: [
                { label: "Chumz (Kenya)", href: "https://chumz.io" },
                { label: "Tunzi (Rwanda)", href: "https://tunzi.money" },
              ],
            },
            "Led the redesign of Groups, which lets users save and invest together toward shared goals, taking it from design handoff to release on Chumz and Tunzi with a team of engineers",
            "Shipped a new Groups onboarding flow, customizable group rules and deep links that let people join a group straight from a shared link",
            "Lead front-end development of the Customer Experience dashboard, which lets the customer success team look up customers, check transactions, update account details and help users sign up without passing issues to engineers",
            "Migrated the daily report notifications from Google Cloud Functions to Docker containers on Kubernetes CronJobs, deployed several services with Argo CD and put internal tools and services behind Tailscale",
            "Mentor five engineers through onboarding, code reviews and pair programming",
            "Set the team's engineering standards, adding linting and commit rules, CI/CD pipelines, release automation, Playwright end-to-end tests and Knip to remove dead code",
            "Introduced agent instructions, rules and skills so AI coding tools follow the team's conventions",
          ],
        },
        {
          title: "Founding Engineer",
          start: "2019",
          end: "2022",
          description:
            "Founding engineer on the Chumz savings and investment platform. Started part-time while at university, continued alongside a full-time role at Weza Ventures and went full-time in 2021.",
          highlights: [
            "Helped build the Chumz React Native app and website from the product's early days, including customer research and design sprints",
            "Integrated M-Pesa for deposits into Chumz and withdrawals back to users' M-Pesa accounts",
            "Created Chumz's first fund administration system with Next.js, Express.js and Docker on DigitalOcean, calculating customer holdings in money market and fixed-income funds every day",
            "Set up the daily stakeholder reporting service on Google Cloud Functions, Cloud Scheduler and Pub/Sub",
          ],
        },
      ],
    },
    {
      company: "Deckers Brands",
      link: "https://www.deckers.com/",
      badges: ["Remote"],
      title: "Front-End & AWS Engineer",
      start: "2022",
      end: "2026",
      contractVia: "Toptal",
      contractViaLink: "https://www.toptal.com/developers/resume/antonio-maina",
      description:
        "Contract work for the US company behind HOKA, UGG and Teva, on an internal order management service used by staff and engineers. Joined while the service was still new.",
      highlights: [
        "Built reusable React and TypeScript components for the service's staff and engineering interfaces, from design to production",
        "Set up automated test suites, structured logging and Datadog monitoring for the service",
        "Maintained multi-environment CI/CD pipelines on AWS CloudFormation, CodeBuild and CodePipeline",
        "Migrated legacy on-premise functionality to serverless AWS using Lambda, DynamoDB, SQS, S3 and CloudFront",
      ],
    },
    {
      company: "Just Home",
      link: "https://justhome.com/en",
      badges: ["Remote"],
      title: "Front-End Engineer",
      start: "2022",
      end: "2022",
      contractVia: "Toptal",
      contractViaLink: "https://www.toptal.com/developers/resume/antonio-maina",
      description:
        "Front-end work on a German platform that helps people find the best mortgage rates.",
      highlights: [
        "Worked with the team to migrate the platform from Create React App to Next.js for better SEO, a more mature framework and stronger tooling",
        "Helped move the UI from Bootstrap to Tailwind CSS components",
        "Built the front-end Keycloak authentication with other engineers, covering login, sign-up, token refresh and protected pages",
        "Wrote unit tests with Jest and Testing Library and end-to-end tests with Cypress",
      ],
    },
    {
      company: "Weza Ventures",
      link: "https://www.weza.io/",
      badges: ["Nairobi, Kenya"],
      title: "Software Engineer",
      start: "2020",
      end: "2021",
      description:
        "Full-time role at a company started by Moneto's founder. Led front-end development for Weza's products and internal tools and built backend API endpoints.",
      highlights: [
        {
          text: "Built the WezaGo buy now pay later front end as the only front-end developer, working from the designer's designs",
          links: [{ label: "WezaGo", href: "https://wezago.com" }],
        },
        "Designed and built the weza.io web dashboard and internal dashboards as the sole designer and front-end developer",
        "Built API endpoints for Weza's core backend, running Express.js on Cloud Run with PostgreSQL on Cloud SQL, RabbitMQ and Redis",
      ],
    },
    {
      company: "The Archangel Interactive",
      link: "https://wearearchangel.com/",
      badges: ["Nairobi, Kenya"],
      title: "Full-Stack Developer",
      start: "2018",
      end: "2019",
      description:
        "Joined as an intern and moved to full-time after three months, working across front end, back end and infrastructure for client products.",
      highlights: [
        "Turned designs into working front ends with React, JavaScript and SASS (ITCSS and BEM)",
        "Built backend services in Python with Django and Flask",
        "Automated internal tasks with Node.js and set up WordPress sites for clients",
      ],
    },
  ],
  skills: [
    "TypeScript",
    "JavaScript",
    "React",
    "React Native",
    "Next.js",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Zod",
    "Zustand",
    "Tailwind CSS",
    "Turborepo",
    "AWS (Lambda, DynamoDB, SQS, S3, CloudFront)",
    "AWS CloudFormation",
    "Google Cloud (Cloud Run, Cloud SQL)",
    "Docker",
    "Kubernetes",
    "Argo CD",
    "GitHub Actions",
    "Vitest",
    "Playwright",
    "Jest",
    "Cypress",
    "Datadog",
    "Keycloak",
    "M-Pesa Daraja API",
    "Python",
    "Django",
  ],
  projects: [
    {
      title: "toolbox",
      techStack: [
        "React",
        "TypeScript",
        "Vite",
        "TanStack Router",
        "Tailwind CSS",
        "Cloudflare",
      ],
      description:
        "A keyboard-first set of 14 developer utilities, including Base64, JWT decoding and verification, JSON/YAML/CSV conversion, UUIDs and hashing. Everything runs in the browser.",
      link: {
        label: "tools.antoniomaina.com",
        href: "https://tools.antoniomaina.com",
      },
    },
    {
      title: "ITCSS",
      techStack: ["Node.js", "npm", "JavaScript"],
      description:
        "An npm CLI that scaffolds a SASS project using the ITCSS methodology.",
      link: { label: "GitHub", href: "https://github.com/r0b0tt/itcss" },
    },
  ],
} as const;
