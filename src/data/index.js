import { Code, Layout, Zap, Globe, Github, Mail } from 'lucide-react';

/* 
  Allows you to use images from the assets folder.
  To add your own images:
  1. Add the file to src/assets/
  2. Import it here like: import myImage from '../assets/my-image.png'
  3. Use it in the data below
*/
import dashboardImg from '../assets/dashboard.png';
import mobileImg from '../assets/mobile.png';

export const HERO_DATA = {
    greeting: "HELLO, I'M Saman",
    name: "Saman Developer",
    role: "Building Digital Experiences for Web & Mobile.",
    description: "I create scalable, user-friendly applications with modern tech stacks. Focused on performance, accessibility, and clean code.",
    linkToProjects: "https://max-barber.vercel.app/",
    linkToContact: "mailto:saman.dakheel.a@gmail.com"
};

export const ABOUT_DATA = {
    title: "About Me",
    text: "I am a Web & Mobile App Developer with a passion for building beautiful, functional, and scalable digital products. With a strong foundation in both frontend and backend technologies, I turn complex problems into elegant solutions. My goal is to create software that not only meets business needs but also delights users.",
    highlights: [
        {
            icon: Code,
            color: "text-accent-cyan",
            title: "Clean Code",
            desc: "I write maintainable, scalable, and human-readable code."
        },
        {
            icon: Layout,
            color: "text-accent-purple",
            title: "Responsive Design",
            desc: "Pixel-perfect experiences across all devices and screen sizes."
        },
        {
            icon: Zap,
            color: "text-accent-cyan",
            title: "High Performance",
            desc: "Optimized for speed, accessibility, and SEO best practices."
        },
        {
            icon: Globe,
            color: "text-accent-purple",
            title: "Modern Tech",
            desc: "Leveraging the latest frameworks and tools to build the future."
        }
    ]
};

export const SKILLS_DATA = [
    {
        title: "Frontend",
        skills: ["Flutter", "Dart", "React", "React Native", "Next.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5/CSS3"]
    },
    {
        title: "Backend",
        skills: ["Node.js", "Express", "Firebase", "PostgreSQL", "REST APIs", "GraphQL", "Python"]
    },
    {
        title: "Tools & DevOps",
        skills: ["Git", "GitHub", "Vite", "Figma", "VS Code", "Vercel"]
    }
];

export const PROJECTS_DATA = [
    {
        title: "SaaS Analytics Dashboard",
        desc: "A high-performance analytics platform for tracking real-time business metrics. Features dark mode, interactive charts, and data export capabilities.",
        tech: ["React", "D3.js", "Node.js", "MongoDB"],
        image: dashboardImg,
        links: { demo: "#", code: "#" }
    },
    {
        title: "FinTech Mobile App",
        desc: "Secure money transfer and banking application with biometric authentication and spending analysis tools.",
        tech: ["React Native", "Firebase", "Redux", "TypeScript"],
        image: mobileImg,
        links: { demo: "#", code: "#" }
    }
];

export const EXPERIENCE_DATA = [
    {
        role: "Senior Full Stack Mobile",
        company: "Tech Innovators Inc.",
        period: "2023 - Present",
        desc: "Leading the development of scalable web applications using React and Node.js. Mentoring junior developers and optimizing CI/CD pipelines."
    },
    {
        role: "Mobile App Developer",
        company: "StartUp Vision",
        period: "2021 - 2023",
        desc: "Built cross-platform mobile apps with React Native. Improved app performance by 40% and implemented robust offline capabilities."
    },
    {
        role: "Web Developer",
        company: "Creative Agency",
        period: "2019 - 2021",
        desc: "Developed responsive websites for diverse clients. Focused on UI/UX design implementation and accessibility standards."
    }
];

export const SOCIAL_LINKS = [
    {
        name: "Email",
        url: "mailto:saman.dakheel.a@gmail.com",
        icon: Mail,
        text: "saman.dakheel.a@gmail.com"
    },
    {
        name: "GitHub",
        url: "https://github.com/saman-dakheel",
        icon: Github
    },

];
