// /src/data/contentdata.ts
import type {
  HeroData,
  EducationData,
  TechSkillsData,
  ExperienceData,
  WorkApproachData,
  ContactData
} from "../types/contentdata";

// ----------------- Hero -----------------
export const herodata: HeroData = {
  title: "Hi, I’m Benjamin Njuguna",
  description:
    "Software Engineer specializing in building scalable applications with modern technologies. I focus on clean architecture, performant code, and maintainable code.",
  imgsrc: "my__image.png",
    details: [
    {
      name: "Benjamin Njuguna",
      title: "Software Engineer",
    },
  ],
};

// ----------------- Education -----------------
export const educationdata: EducationData = {
  title: "Education",
  description: "My academic background",
  details: [
    {
      school: "Kirinyaga University",
      level: "Bachelor of Science in Information Technology",
      duration: "2019 => 2023",
    },
  ],
};

// ----------------- Technical Skills -----------------
export const techskillsdata: TechSkillsData = {
  title: "Technical Skills",
  description: "I have a strong foundation in the following:",
  details: [
    {
      name: "Programming Languages",
      skills: [
        { ski: "Javascript", logo: "javascript.svg" },
        { ski: "Typescript", logo: "typescript.svg" },
        { ski: "Python", logo: "python.svg" },
        { ski: "Dart", logo: "dart.svg" },
        { ski: "Go", logo: "go.svg" },
        { ski: "Elixir", logo: "elixir.svg" },
      ],
    },
    {
      name: "Frontend Development",
      skills: [
        { ski: "HTML", logo: "html5.svg" },
        { ski: "CSS", logo: "css.svg" },
        { ski: "Javascript", logo: "javascript.svg" },
        { ski: "React", logo: "react.svg" },
        { ski: "Vue", logo: "vuedotjs.svg" },
        { ski: "Next.js", logo: "nextdotjs.svg" },
        { ski: "Tailwind", logo: "tailwindcss.svg" },
        { ski: "Nuxt.js", logo: "nuxt.svg" },
      ],
    },
    {
      name: "Backend Development",
      skills: [
        { ski: "Node.js", logo: "nodedotjs.svg" },
        { ski: "Express.js", logo: "express.svg" },
        { ski: "NestJS", logo: "nestjs.svg" },
        { ski: "FastAPI", logo: "fastapi.svg" },
        { ski: "Flask", logo: "flask.svg" },
      ],
    },
    {
      name: "Database",
      skills: [
        { ski: "MongoDB", logo: "mongodb.svg" },
        { ski: "MySQL", logo: "mysql.svg" },
        { ski: "PostgreSQL", logo: "postgresql.svg" },
        { ski: "SQLite", logo: "sqlite.svg" },
        { ski: "Redis", logo: "redis.svg" },
      ],
    },
    {
      name: "Mobile Development",
      skills: [{ ski: "Flutter", logo: "flutter.svg" }],
    },
    {
      name: "Tools and Technologies",
      skills: [
        { ski: "Git", logo: "git.svg" },
        { ski: "GitHub", logo: "github.svg" },
        { ski: "Figma", logo: "figma.svg" },
        { ski: "Docker", logo: "docker.svg" },
        { ski: "Linux", logo: "linux.svg" },
        { ski: "Bash", logo: "gnubash.svg" },
      ],
    },
  ],
};

// ----------------- Experience -----------------
export const expriencedata: ExperienceData = {
  title: "Experience",
  description: "Worked both as an attachee and freelancer",
  details: [
    {
      name: "Muva.tech",
      title: "Junior Software Engineer",
      responsibilities: [
        "Designed and maintained relational and non-relational data models",
        "Contributed to UI/UX design to improve usability and clarity",
        "Developed frontend applications using React",
        "Built and maintained backend APIs using NestJS",
        "Implemented CRUD operations and business logic",
        "Collaborated with team members to deliver features efficiently",
      ],
    },
    {
      name: "Spiffy build",
      title: "Chief Information Officer",
      responsibilities: [
        "Develop and execute strategic plans for the company",
        "Establish systems and processes to manage the company's operations",
        "Control and manage quality assurance processes",
      ],
    }
  ],
};

// ----------------- Work Approach -----------------
export const WorkApproachdata: WorkApproachData = {
  title: "Work Approach",
  description:
    "I follow a structured and practical approach to ensure efficient and scalable software delivery:",
  details: [
    {
      name : "Design",
      steps : [
        {
          step: 1,
          title : "Colors and backgrounds.",
          info : "Themes and color schemes are essential for creating a visually appealing and cohesive user interface. I use a combination of color palettes, typography, and imagery to create a consistent and visually pleasing design."
        },
        {
          step : 2,
          title : "Typography",
          info : "Font settings to ensure readability and consistency. I use a combination of sans-serif and serif fonts to create a visually appealing and professional look."
        },
        {
          step : 3,
          title : "Imagery",
          info : "Images are a powerful tool for conveying emotions and ideas. I use high-quality images to enhance the visual appeal of my designs and create a more engaging user experience."
        },
        {
          step : 4,
          title : "Layout",
          info : "Layout is the arrangement of elements on a page. I use a combination of grids, flexbox, and other layout techniques to create a visually appealing and user-friendly design."
        }
      ]
    },
    {
      name : "ui/ux development",
      steps : [
        {
          step : 1,
          title : "Data",
          info : "What is going to be seen."
        },
        {
          step : 2,
          title : "Input",
          info : "What is being collected if any."
        },
        {
          step : 3,
          title : "Output",
          info : "What is going to be emitted e.g events or calls to backends.."
        },
        {
          step : 4,
          title : "Look",
          info : "How does it look like."
        }
      ]
    },
    {
      name : "Application architecture." ,
      steps : [
        {
          step : 1,
          title : "Data",
          info : "The shape and structure of the data."
        },
        {
          step : 2,
          title : "CRUD ops",
          info : "The operations that can be performed on the data."
        },
        {
          step : 3,
          title : "Features",
          info : "The functionalities that can be performed on the data."
        },
        {
          step : 4,
          title : "Mod/pkgs/libs",
          info : "The external dependencies that are used in the application. # Tools of work."
        }
      ]
    }
  ],
};

// ----------------- Contact -----------------
export const contactdata: ContactData = {
  title: "Contact",
  description:
    "I am always available to discuss your project and answer any questions you may have.",
  details: [
    {
      name: "Email",
      info: "benjaminnjuguna77@gmail.com",
    },
    {
      name: "Linkedin",
      info: "https://www.linkedin.com/in/benjaminnjuguna/",
    },
    {
      name: "Github",
      info: "https://github.com/GicheruBenjamin",
    },
  ],
};
