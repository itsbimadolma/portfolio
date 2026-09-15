import { Layout, Smartphone, PenTool, Palette } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  id: number;
  title: string;
  desc: string;
  fullDescription: string;
  icon: LucideIcon;
  color: string;
  bg: string;
  image?: string;
};

export const services: Service[] = [
  {
    id: 1,
    title: "Web design",
    desc: "Web development is the process of building, programming...",
    fullDescription: "Web design encompasses many different skills and disciplines in the production and maintenance of websites. Our web design services include UI/UX design, responsive layouts, and seamless integration with modern web frameworks. We ensure your website looks stunning and functions perfectly across all devices.",
    icon: Layout,
    color: "text-orange-500",
    bg: "bg-orange-100 dark:bg-orange-500/10",
  },
  {
    id: 2,
    title: "Mobile app",
    desc: "Mobile app development involves creating software for smartphones...",
    fullDescription: "We build intuitive and high-performing mobile applications for iOS and Android. Whether it's a native app or a cross-platform solution using React Native, we focus on delivering a seamless user experience, fast load times, and secure data handling.",
    icon: Smartphone,
    color: "text-pink-500",
    bg: "bg-pink-100 dark:bg-pink-500/10",
  },
  {
    id: 3,
    title: "UI/ UX design",
    desc: "UI/UX design is the process of creating user interfaces...",
    fullDescription: "Great design is more than just aesthetics; it's about solving user problems. Our UI/UX design process involves deep user research, wireframing, prototyping, and rigorous usability testing. We design digital products that are beautiful, intuitive, and easy to use.",
    icon: PenTool,
    color: "text-purple-500",
    bg: "bg-purple-100 dark:bg-purple-500/10",
  },
  {
    id: 4,
    title: "Graphics design",
    desc: "Graphic design is the art of communicating ideas visually...",
    fullDescription: "Our graphic design services help you build a strong visual identity. From logos and branding materials to marketing assets and digital illustrations, we craft visual stories that resonate with your target audience and elevate your brand's presence.",
    icon: Palette,
    color: "text-red-500",
    bg: "bg-red-100 dark:bg-red-500/10",
  },
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    cover: "/Projects/Ecommerces.png",
    category: "Web Application",
    description: "A full-featured e-commerce platform built with modern web technologies. It includes user authentication, product search and filtering, a shopping cart, and secure checkout integration. Designed with a mobile-first approach to ensure a seamless shopping experience across all devices.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Stripe"],
    image: "bg-gradient-to-tr from-gray-200 to-gray-300 dark:from-zinc-800 dark:to-zinc-900",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    cover: "/Projects/Dashboard.png",
    category: "UI/UX Design",
    description: "An intuitive and interactive dashboard for a SaaS product. Features include real-time data visualization, customizable widgets, and comprehensive analytics reporting. The UI is clean, modern, and highly responsive.",
    technologies: ["React", "Recharts", "Framer Motion", "Tailwind CSS"],
    image: "bg-gradient-to-tr from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Social Media App",
    cover: "/Projects/Message.png",
    category: "Mobile App",
    description: "A cross-platform mobile application focused on connecting people through shared interests. Features include real-time messaging, photo sharing, user profiles, and an algorithmic feed.",
    technologies: ["React Native", "Firebase", "Redux"],
    image: "bg-gradient-to-tr from-rose-100 to-pink-100 dark:from-rose-900/40 dark:to-pink-900/40",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "Portfolio Website",
    cover: "/Projects/Portfolio.png",
    category: "Web Design",
    description: "A personal portfolio website for a creative professional. Features smooth scrolling, parallax effects, and a custom content management system for easy updates. Optimized for SEO and performance.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "bg-gradient-to-tr from-emerald-100 to-teal-100 dark:from-emerald-900/40 dark:to-teal-900/40",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 5,
    title: "Real Estate Platform",
    cover: "/Projects/Real-Esate.png",
    category: "Web Application",
    description: "A platform for buying, selling, and renting properties. Features include advanced filtering, interactive maps, and virtual tours.",
    technologies: ["Next.js", "Tailwind CSS", "Mapbox", "Prisma"],
    image: "bg-gradient-to-tr from-amber-100 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/40",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 6,
    title: "Task Management App",
    cover: "/Projects/Task-manager.png",
    category: "SaaS",
    description: "A collaborative task management tool for remote teams. Features real-time updates, kanban boards, and integration with popular calendar apps.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    image: "bg-gradient-to-tr from-cyan-100 to-blue-100 dark:from-cyan-900/40 dark:to-blue-900/40",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 7,
    title: "Fitness Tracking Dashboard",
    cover: "/Projects/Fitness-tracker.png",
    category: "Web Application",
    description: "A comprehensive dashboard for tracking workouts, nutrition, and personal health metrics. Includes progress charts and goal setting.",
    technologies: ["Vue.js", "Tailwind CSS", "Chart.js"],
    image: "bg-gradient-to-tr from-lime-100 to-green-100 dark:from-lime-900/40 dark:to-green-900/40",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 8,
    title: "Recipe Sharing Network",
    cover: "/Projects/Recipce-Share.png",
    category: "Social Platform",
    description: "A community-driven platform for sharing and discovering recipes. Users can save favorites, create meal plans, and review recipes.",
    technologies: ["React", "GraphQL", "Tailwind CSS", "AWS"],
    image: "bg-gradient-to-tr from-red-100 to-rose-100 dark:from-red-900/40 dark:to-rose-900/40",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 9,
    title: "Crypto Portfolio Tracker",
    cover: "/Projects/crypto-protfolio.png",
    category: "Fintech",
    description: "A secure app to track cryptocurrency investments. Features live price updates, portfolio analytics, and profit/loss reporting.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "CoinGecko API"],
    image: "bg-gradient-to-tr from-violet-100 to-fuchsia-100 dark:from-violet-900/40 dark:to-fuchsia-900/40",
    liveUrl: "#",
    githubUrl: "#"
  }
];
