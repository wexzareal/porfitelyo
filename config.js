import { FaDiscord, FaGithub, FaMapPin } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail } from "react-icons/hi";

export const config = {
    developer: {
        name: "wexza",
    },
    social: {
        github: "wexzareal",
        discord: "1193165342277644343"
    },
    NAV_ITEMS: [
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' }
    ],
    recentTracks: true, // Enable/disable Spotify recent tracks
    projects: [
        {
            id: 1,
            title: "Personal Portfolio Website",
            description: "A modern and responsive portfolio website to showcase my projects, skills, and experiences. Built with Next.js and styled using TailwindCSS, this site provides a seamless user experience and a clean design that adapts to all devices.",
            image: "/projects/portfolio-app.png",
            technologies: ["Next.js", "TailwindCSS", "Framer Motion", "Vercel"],
            github: "https://github.com/wexzareal/portfolio-website",
            demo: "https://wexza.vercel.app"
        }
    ],
    skills: [
        {
            title: "Frontend",
            icon: <HiCode />,
            description: "Modern web interfaces",
            bgClass: "bg-blue-500/10",
            iconClass: "text-blue-500",
            skills: [
                { name: "CSS", level: "Advanced", hot: true },
                { name: "TypeScript", level: "Expert" },
                { name: "JavaScript", level: "Advanced" }
            ]
        },
        {
            title: "Backend",
            icon: <HiDatabase />,
            description: "Server & Database",
            bgClass: "bg-emerald-500/10",
            iconClass: "text-emerald-500",
            skills: [
                { name: "Node.js", level: "Advanced", hot: true },
                { name: "MongoDB", level: "Advanced" }
            ]
        },
        {
            title: "Programs & Tools",
            icon: <HiCube />,
            description: "Development & Productivity Tools",
            bgClass: "bg-orange-500/10",
            iconClass: "text-orange-500",
            skills: [
                { name: "VS Code", level: "Expert", hot: true },
                { name: "Photoshop", level: "Intermediate" }
            ]
        }
    ],
    contactInfo: [
        {
            icon: <FaDiscord className="w-5 h-5" />,
            label: "Discord",
            value: "wexza",
            link: `https://discord.com/users/1193165342277644343`
        },
        {
            icon: <FaGithub className="w-5 h-5" />,
            label: "GitHub",
            value: "@wexzareal",
            link: `https://github.com/wexzareal`
        },
        {
            icon: <HiMail className="w-5 h-5" />,
            label: "Email",
            value: "wexza0@hotmail.com",
            link: "mailto:wexza0@hotmail.com"
        },
        {
            icon: <FaMapPin className="w-5 h-5" />,
            label: "Location",
            value: "Turkey",
            link: null
        }
    ]
}