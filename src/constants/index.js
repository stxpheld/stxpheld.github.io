import {
  mobile,
  backend,
  creator,
  web,
  amazon,
  api,
  docker,
  git,
  javascript,
  kubernetes,
  linux,
  python,
  reactjs,
  typescript,
  threejs,
  generali,
  idf,
  coffeeai,
  linuxtool,
  stocks,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Critical Thinking",
    icon: web,
  },
  {
    title: "Problem Solver",
    icon: mobile,
  },
  {
    title: "Communication",
    icon: backend,
  },
  {
    title: "Creativity",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Amazon",
    icon: amazon,
  },
  {
    name: "Api",
    icon: api,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];


const experiences = [
  {
    title: "Data Analyst",
    company_name: "Generali",
    icon: generali,
    iconBg: "#E6DEDD",
    date: "Sept 2023 - Sept 2024",
    points: [
      "Automated claims data processing using VBA and SQL to improve reporting reliability and accelerate workflows.",
      "Maintained and optimized Microsoft Access systems to ensure accurate and reliable data for operational and financial decision-making.",
    ],
  }, 
  {
    title: "Financial Data & Operations Intern",
    company_name: "Île-de-France Regional Council",
    icon: idf,
    iconBg: "#383E56",
    date: "May 2022 - Sept 2022",
    points: [
      "Developed Python scripts to automate financial reporting tasks and support the management of regional intervention expenses, improving efficiency and reducing manual workload.",
      "Collaborated with operational teams through regular meetings to align and optimize financial workflows.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Stéphane quickly adapted to the team and delivered high-quality work with great autonomy.",
    name: "Alexa Guena",
    designation: "CFO",
    company: "Île-de-France Regional Council",
  },
  



  {
    testimonial:
      "Working with Stéphane was a great experience. He understood my vision quickly and turned it into a functional and beautiful website.",
    name: "Alexis L.",
    designation: "Photographer",
    company: "Aleh.prod"
  },
];

const projects = [
  {
    name: "AI Coffee Chatbot (In Progress)",
    description:
      "An AI chatbot that helps users place orders and get personalized recommendations in real time.",
    tags: [
      {
        name: "LLMs",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "reactnative",
        color: "pink-text-gradient",
      },
    ],
    image: coffeeai,
    source_code_link: "https://github.com/stxpheld/coffee_ai"

  },
  {
    name: "Linux Toolkit",
    description:
      "Python script managing various applications and system settings on a linux machine.",
    tags: [
      {
        name: "bash",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
    ],
    image: linuxtool,
    source_code_link: "https://github.com/stxpheld/linuxtoolkit",
  },
  {
    name: "Real-Time Stock Market",
    description:
      "A web application that tracks and visualizes live stock market data in real time.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "ui",
        color: "pink-text-gradient",
      },
    ],
    image: stocks,
    source_code_link: "https://github.com/stxpheld/stockmarketapp",
  },
];

export { services, technologies, experiences, testimonials, projects };
